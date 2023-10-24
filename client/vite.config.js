// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';
// eslint-disable-next-line import/no-extraneous-dependencies
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@pages': resolve(__dirname, 'src', 'pages'),
      '@components': resolve(__dirname, 'src', 'components'),
      '@common': resolve(__dirname, 'src', 'common'),
    },
  },
  plugins: [react()],
});
