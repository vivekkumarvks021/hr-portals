import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "leave",
      filename: "remoteEntry.js",

      exposes: {
        "./LeaveApp": "./src/RemoteRoot.tsx",
      },

      shared: {
        react: {
          singleton: true,
        },
        "react-dom": {
          singleton: true,
        },
        "react-router-dom": {
          singleton: true,
        },
        "@reduxjs/toolkit": {
          singleton: true,
        },
        "react-redux": {
          singleton: true,
        },
      },
    }),
  ],

  build: {
    target: "esnext",
  },

  server: {
    port: 3002,
    origin: "http://localhost:3002",
  },
});
