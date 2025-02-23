/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL_HWISO: string;
  readonly VITE_API_BASE_URL_JUNBO: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
