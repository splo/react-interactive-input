import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'React Interactive Input',
      formats: ['es', 'umd'],
      fileName: format => `react-interactive-input.${format}.js`,
    },
    rollupOptions: {
      // Externalize dependencies that shouldn't be bundled
      external: ['react', 'react-dom'],
      output: {
        exports: 'named',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
