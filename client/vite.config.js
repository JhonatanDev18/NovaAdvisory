import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { Constantes } from "..//client/src/config/config.js";

export default defineConfig({
  plugins: [react()],
  server: {
    port: Constantes.PORT_VITE,
  },
});
