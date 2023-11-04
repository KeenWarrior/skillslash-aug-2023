import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function BaseBottomNav() {
  const location = useLocation();
  const [value, setValue] = useState(location.pathname);
  const navigate = useNavigate();

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        navigate(newValue);
      }}
    >
      <BottomNavigationAction value="/" label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction
        value="/messages"
        label="Messages"
        icon={<EmailIcon />}
      />
      <BottomNavigationAction
        value="/notifications"
        label="Notifications"
        icon={<NotificationsIcon />}
      />
    </BottomNavigation>
  );
}
