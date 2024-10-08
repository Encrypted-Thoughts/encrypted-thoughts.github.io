import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [vue()],
  build: {
    outDir,
    emptyOutDir: false,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        auth: resolve(root, 'auth.html'),
        chathistory: resolve(root, 'chat-history.html')
      }
    },
  },
});

