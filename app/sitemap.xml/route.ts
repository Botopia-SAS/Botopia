import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://botopia.tech';
  const languages = ['es', 'en', 'pt'];
  
  const staticPages = [
    '',
    '/about/quienes-somos',
    '/about/equipo',
    '/about/casos-de-exito',
    '/soluciones/appweb',
    '/soluciones/appmovil',
    '/soluciones/chatbot',
    '/solutions',
    '/blog',
    '/contactUs',
    '/pqrs',
    '/politica-datos',
    '/demos',
    '/checklist',
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${languages.flatMap(lang => 
  staticPages.map(page => `  <url>
    <loc>${baseUrl}/${lang}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
    ${languages.filter(l => l !== lang).map(altLang => 
      `<xhtml:link rel="alternate" hreflang="${altLang}" href="${baseUrl}/${altLang}${page}"/>`
    ).join('\n    ')}
  </url>`).join('\n')
).join('\n')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}