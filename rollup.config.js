import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import html from "rollup-plugin-bundle-html";
import postcss from "rollup-plugin-postcss";
import babel from "rollup-plugin-babel";
import del from "rollup-plugin-delete";

const isProduction = process.env.MODE === "production";

export default {
    input: "src/index.js",
    output: {
        sourcemap: !isProduction,
        file: isProduction ? "public/bundle-[hash].js" : "serve/bundle.js",
        name: "app",
        format: "iife"
    },
    plugins: [
        del({
            targets: isProduction ? "public/bundle*" : "serve/bundle*"
        }),

        html({
            template: "src/index.html",
            dest: isProduction ? "public" : "serve",
            filename: isProduction ? "../index.html" : "index.html"
        }),

        svelte({
            dev: !isProduction,
            css: css => {
                css.write(isProduction ? "public/bundle-[hash].css" : "serve/bundle.css", !isProduction);
            }
        }),

        postcss({
            minimize: true,
            extensions: [".css"]
        }),

        resolve({
            browser: true,
            dedupe: importee => importee === "svelte" || importee.startsWith("svelte/")
        }),

        babel({
            extensions: [".js", ".mjs", ".html", ".svelte"]
        }),

        commonjs(),

        !isProduction && livereload({
            watch: "serve"
        }),

        !isProduction && serve({
            contentBase: "serve",
            port: 5000
        }),

        isProduction && terser(),
    ]
};

