// @ts-nocheck
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Plugin to inline CSS into index.html
const inlineCssPlugin = () => ({
  name: 'inline-css',
  enforce: 'post',
  generateBundle(options, bundle) {
    let cssContent = '';
    for (const key in bundle) {
      if (key.endsWith('.css')) {
        cssContent = bundle[key].source;
        delete bundle[key]; // Remove the css file from output
      }
    }
    const htmlAsset = Object.values(bundle).find(asset => asset.fileName.endsWith('.html'));
    if (htmlAsset && cssContent) {
      htmlAsset.source = htmlAsset.source.replace(
        /<link[^>]+rel="stylesheet"[^>]+href="[^"]+\.css"[^>]*>/,
        `<style>${cssContent}</style>`
      );
    }
  }
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), inlineCssPlugin()],
})
