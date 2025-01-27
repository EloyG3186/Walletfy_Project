import {resolve} from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': resolve(__dirname,'./src/components'),
      '@pages': resolve(__dirname,'./src/pages'),
    },
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react'],
          'react-dom': ['react-dom'],
          //'user-profile': ['@components/UserProfile'],
        },
      },
    },
  },

  //base: 'https://EloyG3186.github.io/Walletfy_Project'
})
