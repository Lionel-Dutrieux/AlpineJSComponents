import { defineConfig } from "vite";
import path from "path";

import postcss from "./postcss.config.js";

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
    plugins: [],
});
