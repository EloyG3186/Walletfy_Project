import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@hooks': '/src/hooks',
      '@pages': '/src/pages',
      '@api': '/src/api',
      '@customTypes': '/src/types',
      '@utils': '/src/utils',
      '@constants': '/src/constants',
      '@context': '/src/context',
      '@store': '/src/store',
    },
  },
  base: 'https://EloyG3186.github.io/Walletfy_Project'
})
