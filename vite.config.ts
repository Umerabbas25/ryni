import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      '/rest/v1': {
        target: 'https://jkdkywttxwaalpdmoiaq.supabase.co',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/rest\/v1/, '/rest/v1'),
        secure: false,
      },
      '/auth/v1': {
        target: 'https://jkdkywttxwaalpdmoiaq.supabase.co',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/auth\/v1/, '/auth/v1'),
        secure: false,
      },
    },
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
