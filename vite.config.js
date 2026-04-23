import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url"; // Bu satırı ekleyin

// __dirname değişkenini ES Modül ortamı için doğru şekilde tanımlayın
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // '@' sembolünün 'src' klasörünü işaret etmesi için alias (takma ad) ayarı
  resolve: {
    alias: {
      // Artık bu satır doğru çalışacaktır
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    postcss: './postcss.config.js'
  }
});
