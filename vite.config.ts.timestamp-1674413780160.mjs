// vite.config.ts
import path from "path";
import { defineConfig } from "file:///E:/CODE/NPM%20packages/NPMPackagePack/react-elementus/node_modules/vite/dist/node/index.js";
import react from "file:///E:/CODE/NPM%20packages/NPMPackagePack/react-elementus/node_modules/@vitejs/plugin-react/dist/index.mjs";
import dts from "file:///E:/CODE/NPM%20packages/NPMPackagePack/react-elementus/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "E:\\CODE\\NPM packages\\NPMPackagePack\\react-elementus";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@src": path.resolve(__vite_injected_original_dirname, "./src"),
      "@styles": path.resolve(__vite_injected_original_dirname, "./src/styles")
    }
  },
  root: "./",
  build: {
    cssCodeSplit: false,
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "src/main.tsx"),
      name: "react-elementus",
      formats: ["es", "umd"],
      fileName: (format) => `react-elementus.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React"
        }
      }
    }
  },
  plugins: [
    react(),
    dts({
      include: ["src/components/"]
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxDT0RFXFxcXE5QTSBwYWNrYWdlc1xcXFxOUE1QYWNrYWdlUGFja1xcXFxyZWFjdC1lbGVtZW50dXNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXENPREVcXFxcTlBNIHBhY2thZ2VzXFxcXE5QTVBhY2thZ2VQYWNrXFxcXHJlYWN0LWVsZW1lbnR1c1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovQ09ERS9OUE0lMjBwYWNrYWdlcy9OUE1QYWNrYWdlUGFjay9yZWFjdC1lbGVtZW50dXMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcblx0cmVzb2x2ZToge1xuXHRcdGFsaWFzOiB7XG5cdFx0XHQnQHNyYyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpLFxuXHRcdFx0J0BzdHlsZXMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvc3R5bGVzJyksXG5cdFx0fSxcblx0fSxcblx0cm9vdDogJy4vJyxcblx0YnVpbGQ6IHtcblx0XHRjc3NDb2RlU3BsaXQ6IGZhbHNlLFxuXHRcdGxpYjoge1xuXHRcdFx0ZW50cnk6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvbWFpbi50c3gnKSxcblx0XHRcdG5hbWU6ICdyZWFjdC1lbGVtZW50dXMnLFxuXHRcdFx0Zm9ybWF0czogWydlcycsICd1bWQnXSxcblx0XHRcdGZpbGVOYW1lOiAoZm9ybWF0KSA9PiBgcmVhY3QtZWxlbWVudHVzLiR7Zm9ybWF0fS5qc2AsXG5cdFx0fSxcblx0XHRyb2xsdXBPcHRpb25zOiB7XG5cdFx0XHRleHRlcm5hbDogWydyZWFjdCcsICdyZWFjdC1kb20nXSxcblx0XHRcdG91dHB1dDoge1xuXHRcdFx0XHRnbG9iYWxzOiB7XG5cdFx0XHRcdFx0cmVhY3Q6ICdSZWFjdCcsXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0sXG5cdHBsdWdpbnM6IFtcblx0XHRyZWFjdCgpLFxuXHRcdGR0cyh7XG5cdFx0XHRpbmNsdWRlOiBbJ3NyYy9jb21wb25lbnRzLyddLFxuXHRcdH0pLFxuXHRdLFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXVWLE9BQU8sVUFBVTtBQUN4VyxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxTQUFTO0FBSGhCLElBQU0sbUNBQW1DO0FBS3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzNCLFNBQVM7QUFBQSxJQUNSLE9BQU87QUFBQSxNQUNOLFFBQVEsS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxNQUN2QyxXQUFXLEtBQUssUUFBUSxrQ0FBVyxjQUFjO0FBQUEsSUFDbEQ7QUFBQSxFQUNEO0FBQUEsRUFDQSxNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsSUFDTixjQUFjO0FBQUEsSUFDZCxLQUFLO0FBQUEsTUFDSixPQUFPLEtBQUssUUFBUSxrQ0FBVyxjQUFjO0FBQUEsTUFDN0MsTUFBTTtBQUFBLE1BQ04sU0FBUyxDQUFDLE1BQU0sS0FBSztBQUFBLE1BQ3JCLFVBQVUsQ0FBQyxXQUFXLG1CQUFtQjtBQUFBLElBQzFDO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDZCxVQUFVLENBQUMsU0FBUyxXQUFXO0FBQUEsTUFDL0IsUUFBUTtBQUFBLFFBQ1AsU0FBUztBQUFBLFVBQ1IsT0FBTztBQUFBLFFBQ1I7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLElBQUk7QUFBQSxNQUNILFNBQVMsQ0FBQyxpQkFBaUI7QUFBQSxJQUM1QixDQUFDO0FBQUEsRUFDRjtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
