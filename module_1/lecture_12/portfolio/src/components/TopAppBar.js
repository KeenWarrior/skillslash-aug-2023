import styled from "@emotion/styled";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

const CustomToolbar = styled(Toolbar)(({ theme }) => ({
  height: "80px",
  margin: "0px 80px",
  [theme.breakpoints.down("sm")]: {
    margin: "0px 20px",
  },
}));

const ActionButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  textTransform: "none",
  fontSize: "16px",
}));

const ActionIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

function TopAppBar() {
  const actions = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Testimonials", link: "/testimonials" },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" },
  ];

  const theme = useTheme();

  const isMdOrUp = useMediaQuery(theme.breakpoints.up("md"));
  console.log(isMdOrUp);

  return (
    <CustomAppBar position="sticky">
      <CustomToolbar>
        <img src="/images/logo.png" />
        <div
          style={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: "20px",
          }}
        >
          {isMdOrUp &&
            actions.map((action) => {
              return <ActionButton>{action.name}</ActionButton>;
            })}
          {!isMdOrUp && (
            <ActionIconButton>
              <MenuIcon
                style={{
                  fontSize: "32px",
                }}
              />
            </ActionIconButton>
          )}
        </div>
      </CustomToolbar>
    </CustomAppBar>
  );
}

export default TopAppBar;
