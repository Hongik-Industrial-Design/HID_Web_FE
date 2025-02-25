import { defineConfig } from 'tsup';
import svgrPlugin from 'esbuild-plugin-svgr';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  esbuildPlugins: [svgrPlugin()],
});
