import { siteConfig } from "@/app/lib/site";

export async function GET() {
  const base = siteConfig.url.replace(/\/$/, "");
  const routes = ["/", "/about", "/sermons", "/blog", "/podcast", "/books", "/donations", "/prayer-requests", "/contact", "/community", "/livestream"];
  const urls = routes
    .map((r) => {
      return `  <url><loc>${base}${r}</loc></url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
