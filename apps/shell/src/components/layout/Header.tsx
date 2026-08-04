import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6">HR Portal</Typography>
      </Toolbar>
    </AppBar>
  );
}
