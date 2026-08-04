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
        "./EmployeeApp": "./src/RemoteRoot.tsx",
        // "./EmployeeRoutes": "./src/RemoteRoot.tsx",
        // "./App": "./src/App.tsx",
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

  build: {
    target: "esnext",
  },

  server: {
    port: 3001,
    origin: "http://localhost:3001",
  },
});
