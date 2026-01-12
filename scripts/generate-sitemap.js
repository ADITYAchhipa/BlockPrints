// scripts/generate-sitemap.js
import { createWriteStream } from "fs";
import { SitemapStream } from "sitemap";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const hostname = "https://blockprints.store";
const outDir = path.resolve(__dirname, "../dist");
const sitemapPath = path.join(outDir, "sitemap.xml");

// Define all routes - add new blog posts here
const routes = [
    { url: "/", changefreq: "daily", priority: 1.0 },
    { url: "/shop", changefreq: "daily", priority: 0.9 },
    { url: "/about", changefreq: "monthly", priority: 0.7 },
    { url: "/contact", changefreq: "monthly", priority: 0.6 },
    { url: "/blog", changefreq: "weekly", priority: 0.8 },
    // Blog posts
    { url: "/blog/what-is-block-printing", changefreq: "monthly", priority: 0.7 },
    { url: "/blog/dabu-vs-ajrakh-print-difference", changefreq: "monthly", priority: 0.7 },
    { url: "/blog/how-to-care-for-block-printed-clothes", changefreq: "monthly", priority: 0.7 },
    { url: "/blog/natural-dyes-guide-indigo-turmeric", changefreq: "monthly", priority: 0.7 },
    { url: "/blog/block-print-fashion-trends-2026", changefreq: "monthly", priority: 0.7 },
    { url: "/blog/block-print-wedding-guide", changefreq: "monthly", priority: 0.7 },
];

async function run() {
    // Ensure dist directory exists
    await fs.promises.mkdir(outDir, { recursive: true });

    const stream = new SitemapStream({ hostname });
    const writeStream = createWriteStream(sitemapPath);
    stream.pipe(writeStream);

    const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD format

    for (const route of routes) {
        stream.write({
            url: route.url,
            changefreq: route.changefreq,
            priority: route.priority,
            lastmod: today,
        });
    }

    stream.end();

    await new Promise((resolve) => writeStream.on("finish", resolve));
    console.log("✅ Sitemap generated:", sitemapPath);
}

run().catch((err) => {
    console.error("❌ Error generating sitemap:", err);
    process.exit(1);
});
