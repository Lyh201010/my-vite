/**
 * vite plugin
 */

import legacy from '@vitejs/plugin-legacy';
import reactRefresh from '@vitejs/plugin-react-refresh';
import type { Plugin } from 'vite';
import viteCompression from 'vite-plugin-compression';

import {
  VITE_APP_COMPRESS_GZIP,
  VITE_APP_COMPRESS_GZIP_DELETE_FILE,
  VITE_APP_LEGACY
} from '../constant';

export function createVitePlugins(viteEnv: string, isBuild: boolean) {
  const vitePlugins: (Plugin | Plugin[])[] = [
    // have to
    reactRefresh(),
  ];

  // @vitejs/plugin-legacy
  VITE_APP_LEGACY && isBuild && vitePlugins.push(legacy());

  //vite-plugin-theme
  // vitePlugins.push(configThemePlugin(isBuild));

  // The following plugins only work in the production environment
  if (isBuild) {
    // rollup-plugin-gzip
    VITE_APP_COMPRESS_GZIP &&
      vitePlugins.push(
        viteCompression({ deleteOriginFile: VITE_APP_COMPRESS_GZIP_DELETE_FILE }),
      );
  }

  return vitePlugins;
}
