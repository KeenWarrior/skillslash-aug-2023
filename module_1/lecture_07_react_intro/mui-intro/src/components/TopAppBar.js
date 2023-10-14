import "./TopAppBar.css";
import MenuIcon from "@mui/icons-material/Menu";

import {
  AppBar,
  Button,
  Icon,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

function TopAppBar() {
  return (
    <AppBar position="static">
      <Toolbar className="toolbar">
        <IconButton id="menu-icon-button">
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" style={{
            flexGrow: 1,
        }}>My Awesome App</Typography>
        <Button variant="outlined" className="login-button" style={{
            color: "white",
        }}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default TopAppBar;
