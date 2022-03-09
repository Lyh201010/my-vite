import react from '@vitejs/plugin-react';
import type { ConfigEnv, UserConfig } from 'vite';
import { createVitePlugins } from './config/plugin';
const { resolve } = require('path');

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build';
  return {
    plugins: createVitePlugins(mode, isBuild),
    resolve: {
      alias: {
        "@": resolve(__dirname, 'src')
      }
    },
    // css
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    }
  };
}
