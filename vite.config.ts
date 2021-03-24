import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Markdown from 'vite-plugin-md';
import path from 'path';
const resolve = path.resolve;
// https://vitejs.dev/config/
export default defineConfig({
  base: '/3x/',
  server: {
    proxy: {
      '/devServer': {
        target: 'http://nutui-server.jd.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/devServer/, '')
      }
    }
  },
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }]
  },
  css: {
    preprocessorOptions: {
      scss: {
        // example : additionalData: `@import "./src/design/styles/variables";`
        // dont need include file extend .scss
        additionalData: `@import "@/styles/variables.scss";@import "@/sites/assets/styles/variables.scss";`
      }
    }
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    Markdown()
  ],
  build: {
    target: 'es2015',
    outDir: './dist/3x/',
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        doc: resolve(__dirname, 'index.html'),
        mobile: resolve(__dirname, 'demo.html')
      }
    }
  }
});
