import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/RA_router-crud-frontend/', // NOTE: временно для локальной разработки
  server: {
    open: true,
  },
});
