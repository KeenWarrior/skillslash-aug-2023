import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
// import NotificationsIcon from "@mui/icons-material/Notifications";

export default function BaseLeftDrawer() {
  const open = true;
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <Drawer open={open} variant="permanent" anchor="left">
      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          {mdUp && <ListItemText primary="Home" />}
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          {mdUp && <ListItemText primary="Messages" />}
        </ListItem>
      </List>
    </Drawer>
  );
}
