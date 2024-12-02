import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: './tsconfig.app.json',
      outDir: './dist',
      include: ['./src/*.ts', './src/*.vue'],
      exclude: ['./src/**/__tests__/**'],
    }),
  ],
  build: {
    outDir: './dist',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'VueCountupPlus',
      fileName: 'vue-countup-plus',
      formats: ['es', 'umd', 'cjs', 'iife']
    },
    rollupOptions: {
      external: ['vue', 'countup.js'],
      output: {
        globals: {
          vue: 'Vue',
          'countup.js': 'CountUp',
        },
      },
    },
  },
})
