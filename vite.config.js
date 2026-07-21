import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // IMPORTANT: Replace 'your-repo-name' with your actual GitHub repository name
  // Example: if your repo is github.com/SciAditya03/portfolio, use '/portfolio/'
  base: '/adityaudiya/',
  
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