import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";
// console.log(federationPlugin);

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "employee",
      filename: "remoteEntry.js",
      exposes: {
        // "./Routes": "./src/routes/index.tsx",
        "./App": "./src/App.tsx",
      },
      shared: {
        react: {
          singleton: true,
        },
        "react-dom": {
          singleton: true,
        },
      },
    }),
  ],

  build: {
    target: "esnext",
  },

  server: {
    port: 3001,
    origin: "http://localhost:3001",
  },
});
