import type { APIRoute } from 'astro';
import { getLocalizedPath, locales } from '../i18n/routing';

export const GET: APIRoute = () => {
  const pages = ['', 'about', 'contact'];
  const baseUrl = 'https://www.andreascleaning.com';
  const urls = locales.flatMap((locale) =>
    pages.map((page) => getLocalizedPath(locale, page)),
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((path) => `  <url>
    <loc>${baseUrl}${path}</loc>
    <changefreq>monthly</changefreq>
    <priority>${path === '/' || path === '/pt-br' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: { 'Content-Type': 'application/xml' }
  });
};
