import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const base = command === 'build' ? 'https://boamorte8.github.io/gh-react-vite/' : '';
  return {
    base,
    plugins: [tsconfigPaths(), react()],
  };
});
