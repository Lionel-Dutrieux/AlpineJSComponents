import { defineConfig } from "vite";
import path from "path";

import postcss from "./postcss.config.js";

// Function to escape special characters in HTML content
function escapeHtml(html) {
    return html.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
}

// Custom plugin to handle .html files as raw strings
function rawHtmlPlugin() {
    return {
        name: "vite-plugin-raw-html",
        transform(src, id) {
            if (id.endsWith(".html")) {
                const escapedSrc = escapeHtml(src);
                return {
                    code: `export default \`${escapedSrc}\`;`,
                    map: null, // provide source map if available
                };
            }
        },
    };
}

export default defineConfig({
    resolve: {
        alias: {
            "@components": path.resolve(__dirname, "src/components"),
            "@stories": path.resolve(__dirname, "src/stories"),
            "@js": path.resolve(__dirname, "src/js"),
        },
    },
    css: {
        postcss,
    },
    build: {
        outDir: "build",
        rollupOptions: {
            input: {
                main: "src/main.js",
            },
            output: {
                assetFileNames: "[name].[ext]",
                entryFileNames: "[name].js",
                chunkFileNames: "[name].js",
            },
        },
    },
    plugins: [rawHtmlPlugin()],
});
