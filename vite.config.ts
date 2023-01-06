import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteExcludeStylePlugin } from 'vite-exclude-style-plugin';

export default defineConfig({
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
	// esbuild: {
	//   jsxInject: `import React from 'react'`,
	// },
	plugins: [react(), viteExcludeStylePlugin()],
});
