import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const pages = ['', 'services', 'about', 'contact', 'faq'];
  const baseUrl = 'https://www.andreascleaning.com';

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}/${page}${page ? '' : ''}</loc>
    <changefreq>monthly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: { 'Content-Type': 'application/xml' }
  });
};
