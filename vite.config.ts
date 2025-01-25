
import { defineConfig } from 'vitest/config';
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'


export default defineConfig({
  plugins: [vue(), tailwindcss()],
  test: {
    globals: true,
    environment: 'jsdom', // Use jsdom to simulate the DOM
  },
})
