import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const isProd = process.env.NODE_ENV === 'production';

// https://vitejs.dev/config/
export default defineConfig({
  base: isProd ? 'https://boamorte8.github.io/gh-react-vite/' : '',
  plugins: [tsconfigPaths(), react()],
});
