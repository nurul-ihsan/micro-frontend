import { ComponentType, LazyExoticComponent, lazy } from 'react';

export interface Registry {
  // 'angular-module': () => Promise<unknown>;
  // 'remote-react': () => Promise<unknown>;
  'remotereact-hello': () => Promise<unknown>;
  'banner-vue': () => Promise<unknown>;
}

export const registry: Registry = {
  // 'remote-react': () => import('remoteReact/Module'),
  'remotereact-hello': () => import('remoteReact/Hello'),
  'banner-vue': () => import('vueModule/Banner'),
};
