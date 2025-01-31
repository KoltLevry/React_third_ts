import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      'assets': path.resolve(__dirname, 'src/assets'),
      'components': path.resolve(__dirname, 'src/components'),
      'pages': path.resolve(__dirname, 'src/components/pages'),
      'Home': path.resolve(__dirname, 'src/components/pages'),
      'lessons': path.resolve(__dirname, 'src/components/pages/lessons'),
      'homeworks': path.resolve(__dirname, 'src/components/pages/homeworks'),
      'consultations': path.resolve(__dirname, 'src/consultations'),
      'styles': path.resolve(__dirname, 'src/styles'),
    }
  }
})
