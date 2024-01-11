import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  KeySquareIcon,
  Square3DIcon,
  UserIcon,
  WalletIcon,
  DiscountIcon,
  MessageIcon,
  ArrowIcon,
  LogoIcon,
} from "../Icons/icons";
import Avatar from "@mui/material/Avatar";
import avatarImage from "../../images/avatar.jpg";
import { useGlobalState } from "../GlobalState";
import { Box, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./NavMenu.scss";
import { NavLink } from "react-router-dom";

export const NavMenu = () => {
  const { userName } = useGlobalState();

  const theme = createTheme({
    components: {
      MuiListItemText: {
        styleOverrides: {
          root: {
            color: "#9197b3",
            fontFamily: "Poppins, sans-serif",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
            letterSpacing: "-0.14px",
          },
        },
      },
      MuiListItem: {
        styleOverrides: {
          root: {
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            paddingLeft: "29px",
            paddingTop: "0px",
            paddingBottom: "17px",
            borderRadius: "8px",
          },
        },
      },
      MuiList: {
        styleOverrides: {
          root: {
            padding: "0",
          },
        },
      },
      MuiListItemIcon: {
        styleOverrides: {
          root: {
            padding: "0",
            paddingRight: "15px",
            minWidth: "0",
          },
        },
      },
      MuiAvatar: {
        styleOverrides: {
          root: {
            width: 42,
            height: 42,
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minWidth: "306px",
          minHeight: "1198px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            marginLeft: "28px",
            marginTop: "37px",
            marginBottom: "50px",
          }}
        >
          <LogoIcon />
          <Box sx={{ display: "flex", alignItems: "baseline" }}>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "Poppins, sans-serif",
                color: "#000",
                fontSize: "26px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
                letterSpacing: "0.26px",
                paddingLeft: "8px",
              }}
            >
              Dashboard
            </Typography>
            <Typography
              sx={{
                color: "#838383",
                fontSize: "10px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "normal",
                letterSpacing: "-0.1px",
                paddingLeft: "4px",
              }}
            >
              v.01
            </Typography>
          </Box>
        </Box>
        <Box className="menu">
          <List>
            <ListItem>
              <NavLink to="/dashboard">
                <ListItemIcon>
                  <KeySquareIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/product">
                <ListItemIcon>
                  <Square3DIcon />
                </ListItemIcon>
                <ListItemText primary="Product" />
                <ListItemIcon>
                  <ArrowIcon />
                </ListItemIcon>
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/customers">
                <ListItemIcon>
                  <UserIcon />
                </ListItemIcon>
                <ListItemText primary="Customers" />
                <ListItemIcon>
                  <ArrowIcon />
                </ListItemIcon>
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/income">
                <ListItemIcon>
                  <WalletIcon />
                </ListItemIcon>
                <ListItemText primary="Income" />
                <ListItemIcon>
                  <ArrowIcon />
                </ListItemIcon>
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/promote">
                <ListItemIcon>
                  <DiscountIcon />
                </ListItemIcon>
                <ListItemText primary="Promote" />
                <ListItemIcon>
                  <ArrowIcon />
                </ListItemIcon>
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/help">
                <ListItemIcon>
                  <MessageIcon />
                </ListItemIcon>
                <ListItemText primary="Help" />
                <ListItemIcon>
                  <ArrowIcon />
                </ListItemIcon>
              </NavLink>
            </ListItem>
          </List>
        </Box>
        <Box className="user last-element" sx={{ marginTop: "auto" }}>
          <ListItemAvatar>
            <Avatar alt="UserImage" src={avatarImage} />
          </ListItemAvatar>
          <ListItemText primary={userName} secondary="Project Manager" />
        </Box>
      </Box>
    </ThemeProvider>
  );
};
