import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";

const drawerWidth = 240;

export default function Layout() {
  const [open, setOpen] = useState(true);

  return (
    <Box>
      <Header
        drawerWidth={drawerWidth}
        open={open}
        onToggle={() => setOpen(!open)}
      />

      <Toolbar />

      <Box sx={{ display: "flex" }}>
        <Sidebar drawerWidth={drawerWidth} open={open} />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            transition: "margin .3s",
            bgcolor: "#f5f5f5",
            minHeight: "calc(100vh - 64px)",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
