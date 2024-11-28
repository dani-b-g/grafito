import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import tailwind from 'tailwindcss';

export const config: Config = {
  namespace: 'grafito',
  plugins: [
    postcss({
      plugins: [tailwind],
    }),
  ],

  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
    },
  },
};
