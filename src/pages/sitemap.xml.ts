import type { APIRoute } from 'astro';
import { blogPosts } from '../data/blog';

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL('https://sothys-kuantan.example');
  const paths = ['/', '/about', '/shop', '/blog', '/contact', '/terms-and-conditions', ...blogPosts.map((post) => `/blog/${post.slug}`)];
  const urls = paths.map((path) => `  <url><loc>${new URL(path, origin).href}</loc></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
