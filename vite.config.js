import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	base: '/newsletter-sign-up-with-success-message-main/',
	build: {
		rollupOptions: {
		  input: {
			main: resolve(__dirname, 'index.html'),
			nested: resolve(__dirname, 'thanks.html'),
		  },
		},
	},
})