import { defineConfig } from 'vite'
import basicSsl from '@vitejs/plugin-basic-ssl'
// import http from 'https';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [basicSsl()],
  server: {
    open: true
  },
  build: {
    outDir: "dist"
  }
})
