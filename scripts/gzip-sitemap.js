// scripts/gzip-sitemap.js
// Cross-platform gzip for sitemap
import { createGzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, "../dist");
const inputPath = path.join(distDir, "sitemap.xml");
const outputPath = path.join(distDir, "sitemap.xml.gz");

async function run() {
    try {
        await pipeline(
            createReadStream(inputPath),
            createGzip(),
            createWriteStream(outputPath)
        );
        console.log("✅ Sitemap gzipped:", outputPath);
    } catch (err) {
        console.error("❌ Error gzipping sitemap:", err.message);
        // Don't fail build if gzip fails - sitemap.xml still works
    }
}

run();
