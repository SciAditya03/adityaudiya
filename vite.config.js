import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // For GitHub Pages: use '/your-repo-name/'
  // For Vercel: use './' or remove this line entirely
  base: './',
  
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