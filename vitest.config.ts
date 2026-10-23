import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Mosaik's published ESM is resolved by the bundler, as in the browser build.
    server: { deps: { inline: [/@pixel-brewery\//] } },
  },
});
