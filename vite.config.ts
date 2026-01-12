import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import sitemapPlugin from "vite-plugin-sitemap";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    sitemapPlugin({
       hostname: "https://blockprints.store",
  dynamicRoutes: [
    "/",
    "/shop",
    "/about",
    "/contact",
    "/blog",
    "/blog/what-is-block-printing",
    "/blog/dabu-vs-ajrakh-print-difference",
    "/blog/how-to-care-for-block-printed-clothes",
    "/blog/natural-dyes-guide-indigo-turmeric",
    "/blog/block-print-fashion-trends-2026",
    "/blog/block-print-wedding-guide"
  ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
