import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, './src/assets'),
        '@common': path.resolve(__dirname, './src/common'),
        '@application': path.resolve(__dirname, './src/application'),
        '@domain': path.resolve(__dirname, './src/domain'),
        '@infra': path.resolve(__dirname, './src/infra'),
        '@presentation': path.resolve(__dirname, './src/presentation'),
      },
    },
    plugins: [react()],
    server: {
      watch: {
        usePolling: true,
      },
      host: true, // needed for the Docker Container port mapping to work
      strictPort: true,
      port: parseInt(process.env.VITE_PORT),
    },
  });
};
