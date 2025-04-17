import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  preview: {
    host: true,
    port: 3000,
    strictPort: true,
    allowedHosts: ['global-product-settings.vercel.app'],
  },
});
