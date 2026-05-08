import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  build: {
    // Target modern browsers — smaller output, no IE11 polyfills
    target: 'es2020',

    // Raise warning threshold so we only see truly large chunks
    chunkSizeWarningLimit: 600,

    rollupOptions: {
      output: {
        // Manual chunk splitting — vendor libs into separate cached chunks
        manualChunks: {
          // React core — cached independently, rarely changes
          'vendor-react': ['react', 'react-dom'],

          // Router — separate chunk, rarely changes
          'vendor-router': ['react-router-dom'],

          // Framer Motion — large animation library, cache separately
          'vendor-motion': ['framer-motion'],

        },

        // Consistent asset naming for long-term cache
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },

    // Enable CSS code splitting — each route only loads its own CSS
    cssCodeSplit: true,

    // Source maps off in production — reduces output size
    sourcemap: false,

    // Minify with esbuild (default, fastest)
    minify: 'esbuild',
  },

  // Pre-bundle dependencies for faster dev server cold start
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
  },
});
