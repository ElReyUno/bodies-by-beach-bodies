const fs = require('fs');
const path = require('path');

const generateSitemap = () => {
    const publicDir = path.join(__dirname, '../public');

    // Ensure the directory exists. This function can also create subdirectories.
    fs.mkdirSync(publicDir, { recursive: true });


    const sitemap = `
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            <url>
                <loc>http://localhost:3000/</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>daily</changefreq>
                <priority>1.0</priority>
            </url>
        </urlset>
    `;

    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
    console.log("Sitemap created successfully!");
};

generateSitemap();