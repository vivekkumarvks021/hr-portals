import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "shell",

      remotes: {
        employee: {
          type: "module",
          name: "employee",
          entry: "http://localhost:3001/remoteEntry.js",
          entryGlobalName: "employee",
          shareScope: "default",
        },
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
        axios: {
          singleton: true,
        },
        "@mui/material": {
          singleton: true,
        },

        "@mui/icons-material": {
          singleton: true,
        },

        "@emotion/react": {
          singleton: true,
        },

        "@emotion/styled": {
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
  server: {
    port: 3000,
  },
});
