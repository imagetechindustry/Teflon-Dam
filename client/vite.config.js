import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const targetUrl = env.VITE_API_URL ? env.VITE_API_URL.replace(/\/api$/, '') : 'https://imagetech-server.onrender.com';

  return {
    plugins: [
      react(),
      tailwindcss(),
    ],
    server: {
      proxy: {
        '/sitemap.xml': {
          target: targetUrl,
          changeOrigin: true,
          rewrite: (path) => path + '?domain=www.teflondam.com',
        },
      },
    },
  };
});
