import {resolve} from 'path';

export default {
    build: {
      outDir: resolve(__dirname,'dist'),
      emptyOutDir: true,
      rollupOptions: {
        input: resolve(__dirname,'frontend/main.jsx'),
        output:{
          entryFileNames: 'assets/[name].js',
          chunkFileNames: 'assets/[name].js',
          assetFileNames: 'assets/[name][extname]'
        }
      },
    },
  };
  