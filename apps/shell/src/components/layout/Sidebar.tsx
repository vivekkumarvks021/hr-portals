import {
  Drawer,
  Toolbar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import EventIcon from "@mui/icons-material/Event";
import PaymentsIcon from "@mui/icons-material/Payments";

import { NavLink } from "react-router-dom";

type Props = {
  drawerWidth: number;
};

const menus = [
  {
    label: "Dashboard",
    path: "/",
    icon: <DashboardIcon />,
  },
  {
    label: "Employees",
    path: "/employees",
    icon: <PeopleIcon />,
  },
  {
    label: "Leave",
    path: "/leave",
    icon: <EventIcon />,
  },
  {
    label: "Payroll",
    path: "/payroll",
    icon: <PaymentsIcon />,
  },
];

export default function Sidebar({ drawerWidth }: Props) {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />

      <List>
        {menus.map((menu) => (
          <ListItemButton key={menu.path} component={NavLink} to={menu.path}>
            <ListItemIcon>{menu.icon}</ListItemIcon>

            <ListItemText primary={menu.label} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}
