import { NavLink, Outlet } from "react-router-dom";
import { Box, Paper, Tabs, Tab, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

type EmployeeLayoutProps = {
  isStandalone?: boolean;
};

export default function EmployeeLayout({ isStandalone }: EmployeeLayoutProps) {
  const location = useLocation();

  const listUrl = isStandalone ? "/" : "/employees";
  const addEmpUrl = `${isStandalone ? "" : "/employees"}/add`;

  const currentTab = location.pathname.includes("/add") ? 1 : 0;

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
        Employee Management
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Manage employees, add new employees and update existing records.
      </Typography>

      <Paper elevation={2} sx={{ mb: 3 }}>
        <Tabs value={currentTab}>
          <Tab label="Employee List" component={NavLink} to={listUrl} />

          <Tab label="Add Employee" component={NavLink} to={addEmpUrl} />
        </Tabs>
      </Paper>

      <Paper
        elevation={1}
        sx={{
          p: 3,
          borderRadius: 2,
          minHeight: 450,
        }}
      >
        <Outlet />
      </Paper>
    </Box>
  );
}
