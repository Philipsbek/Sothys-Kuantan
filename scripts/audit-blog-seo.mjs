import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const blogRoot = fileURLToPath(new URL('../dist/blog/', import.meta.url));
const imageRoot = fileURLToPath(new URL('../public/blog/', import.meta.url));
const slugs = readdirSync(blogRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name);

const checks = [];
const titles = new Set();
const descriptions = new Set();
const wordCounts = [];

for (const slug of slugs) {
  const html = readFileSync(join(blogRoot, slug, 'index.html'), 'utf8');
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1] ?? '';
  const description = html.match(/<meta name="description" content="(.*?)">/s)?.[1] ?? '';
  const text = html
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z#0-9]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  titles.add(title);
  descriptions.add(description);
  wordCounts.push(text.split(' ').length);
  checks.push({
    slug,
    title,
    description,
    h1: (html.match(/<h1(?:\s|>)/g) ?? []).length,
    canonical: /<link rel="canonical" href="https?:\/\//.test(html),
    articleSchema: html.includes('"@type":"BlogPosting"'),
    breadcrumbSchema: html.includes('"@type":"BreadcrumbList"'),
    image: existsSync(join(imageRoot, `${slug}.webp`)),
  });
}

const failures = checks.filter((item) => (
  !item.title || !item.description || item.h1 !== 1 || !item.canonical ||
  !item.articleSchema || !item.breadcrumbSchema || !item.image
));
const averageWords = Math.round(wordCounts.reduce((sum, count) => sum + count, 0) / wordCounts.length);

console.log(JSON.stringify({
  articles: checks.length,
  uniqueTitles: titles.size,
  uniqueDescriptions: descriptions.size,
  images: readdirSync(imageRoot).filter((name) => name.endsWith('.webp')).length,
  oneH1PerArticle: checks.every((item) => item.h1 === 1),
  articleSchema: checks.every((item) => item.articleSchema),
  breadcrumbSchema: checks.every((item) => item.breadcrumbSchema),
  canonicalLinks: checks.every((item) => item.canonical),
  minRenderedWords: Math.min(...wordCounts),
  averageRenderedWords: averageWords,
  maxRenderedWords: Math.max(...wordCounts),
  failures,
}, null, 2));

if (failures.length > 0 || titles.size !== checks.length || descriptions.size !== checks.length) {
  process.exitCode = 1;
}
