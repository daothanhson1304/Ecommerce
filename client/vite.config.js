import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@pages': resolve(__dirname, 'src', 'pages'),
      '@components': resolve(__dirname, 'src', 'components'),
      '@common': resolve(__dirname, 'src', 'common'),
      '@app': resolve(__dirname, 'src', 'app'),
      '@store': resolve(__dirname, 'src', 'store'),
    },
  },
  plugins: [react()],
  define: {
    'process.env': {},
  },
  optimizeDeps: {
    exclude: ['js-big-decimal'],
  },
});
