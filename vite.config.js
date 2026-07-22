import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Deployed to GitHub Pages as a project site, so everything is served from
  // https://sciaditya03.github.io/adityaudiya/ rather than the domain root.
  // This must match the repo name. Public/ paths held as strings in
  // constants.js go through the asset() helper to pick up the same base.
  base: '/adityaudiya/',


  plugins: [react()],
  
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
});