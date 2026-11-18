import type { APIRoute } from 'astro';
import { blogPosts } from '../data/blog';

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL('https://sothys-kuantan.example');
  const englishPaths = ['/', '/about', '/shop', '/blog', '/contact', '/terms-and-conditions', ...blogPosts.map((post) => `/blog/${post.slug}`)];
  const pairs = englishPaths.map((englishPath) => ({
    englishPath,
    chinesePath: `/zh${englishPath === '/' ? '' : englishPath}`,
  }));
  const urls = pairs.flatMap(({ englishPath, chinesePath }) => [
    `  <url><loc>${new URL(englishPath, origin).href}</loc><xhtml:link rel="alternate" hreflang="en-MY" href="${new URL(englishPath, origin).href}"/><xhtml:link rel="alternate" hreflang="zh-Hans-MY" href="${new URL(chinesePath, origin).href}"/></url>`,
    `  <url><loc>${new URL(chinesePath, origin).href}</loc><xhtml:link rel="alternate" hreflang="en-MY" href="${new URL(englishPath, origin).href}"/><xhtml:link rel="alternate" hreflang="zh-Hans-MY" href="${new URL(chinesePath, origin).href}"/></url>`,
  ]).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
