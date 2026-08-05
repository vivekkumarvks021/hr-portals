import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";

type Props = {
  drawerWidth: number;
  open: boolean;
  onToggle: () => void;
};

export default function Header({ drawerWidth, open, onToggle }: Props) {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        transition: "all 0.3s ease",
        width: open ? `calc(100% - ${drawerWidth}px)` : "100%",
        ml: open ? `${drawerWidth}px` : 0,
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={onToggle}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" noWrap>
          HR Portal
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
