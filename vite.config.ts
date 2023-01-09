import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	resolve: {
		alias: {
			'@src': path.resolve(__dirname, './src'),
			'@styles': path.resolve(__dirname, './src/styles'),
		},
	},
	root: './',
	build: {
		cssCodeSplit: false,
		lib: {
			entry: path.resolve(__dirname, 'src/main.tsx'),
			name: 'react-elementus',
			fileName: (format) => `react-elementus.${format}.js`,
		},
		rollupOptions: {
			external: ['react', 'react-dom'],
			output: {
				globals: {
					react: 'React',
				},
			},
		},
	},
	plugins: [react()],
});
