import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://boamorte8.github.io/gh-react-vite/',
  plugins: [react()],
});
