const fs = require('fs');
const path = require('path');

const generateSitemap = () => {
    const appDir = path.join(__dirname, '../app');
    const baseUrl = 'http://localhost:3000';
    const allowedExtensions = ['.jsx', '.tsx', '.html']; // Configurable extensions

    // Ensure the directory exists.
    fs.mkdirSync(appDir, { recursive: true });

    const urls = [];

    // Recursive function to get all files in a directory
    const getFiles = (dir, currentPath = '') => {
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        entries.forEach(entry => {
            const fullPath = path.join(dir, entry.name);
            const relativePath = path.join(currentPath, entry.name);
            if (entry.isDirectory()) {
                getFiles(fullPath, relativePath);
            } else if (entry.isFile() && allowedExtensions.includes(path.extname(entry.name))) {
                const pathname = entry.name === 'page.jsx' ? relativePath.replace('page.jsx', '') : relativePath.replace(path.extname(entry.name), '');
                const url = `${baseUrl}${pathname}`;
                urls.push({
                    loc: url,
                    lastmod: new Date().toISOString(),
                    changefreq: 'daily',
                    priority: '0.8',
                });
            }
        });
    };
    getFiles(appDir)


    // Generate the XML sitemap
    const sitemap = `
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${urls
            .map(
                (url) => `
                <url>
                    <loc>${url.loc}</loc>
                    <lastmod>${url.lastmod}</lastmod>
                    <changefreq>${url.changefreq}</changefreq>
                    <priority>${url.priority}</priority>
                </url>
            `
            )
            .join('')}
        </urlset>
    `;
    const publicDir = path.join(__dirname, '../public');
    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
    console.log('Sitemap created successfully!');
};

generateSitemap();