import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // CRITICAL FIX for GitHub Pages:
  // Use './' for relative paths. 
  // If './' doesn't work, change it to your exact repo name: '/your-repo-name/'
  base: './', 
  
  plugins: [react()],
  
  build: {
    // Split vendor code from app code for better long-term caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
});