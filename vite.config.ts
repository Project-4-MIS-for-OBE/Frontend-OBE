import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		host: process.env["HOST"] || "127.0.0.1",
		port: Number(process.env["PORT"] || 3000),
		strictPort: true,
		// proxy: {
		// 	"/api": {
		// 		target: "http://10.10.182.135:4000",
		// 		changeOrigin: true,
		// 		rewrite: (path) => path.replace(/^\/api/, ""),
		// 		secure: true,
		// 	},
		// },
	},
});
