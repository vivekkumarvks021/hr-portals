import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const drawerWidth = 240;

export default function Layout() {
  return (
    <Box>
      <Header />

      <Toolbar />

      <Box sx={{ display: "flex" }}>
        <Sidebar drawerWidth={drawerWidth} />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
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
