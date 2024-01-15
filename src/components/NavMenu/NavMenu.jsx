import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import avatarImage from "../../images/avatar.jpg";
import { useGlobalState } from "../GlobalState";
import { Box, Typography } from "@mui/material";
import "./NavMenu.scss";
import { NavLink } from "react-router-dom";
import {
  LogoIcon,
  DashboardIcon,
  ProductIcon,
  CustomersIcon,
  IncomeIcon,
  PromoteIcon,
  HelpIcon,
  ArrowIcon,
} from "../../images/Icons/icons";

export const NavMenu = () => {
  const { userName } = useGlobalState();

  return (
    <Box className="wraper_main">
      <Box className="wraper_logo">
        <LogoIcon />
        <Box className="wraper_logo_text">
          <Typography className="wraper_logo_text_main" variant="h1">
            Dashboard
          </Typography>
          <Typography className="wraper_logo_text_caption" variant="caption">
            v.01
          </Typography>
        </Box>
      </Box>
      <Box className="menu">
        <List>
          <ListItem>
            <NavLink to="/dashboard">
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/product">
              <ListItemIcon>
                <ProductIcon />
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
                <CustomersIcon />
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
                <IncomeIcon />
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
                <PromoteIcon />
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
                <HelpIcon />
              </ListItemIcon>
              <ListItemText primary="Help" />
              <ListItemIcon>
                <ArrowIcon />
              </ListItemIcon>
            </NavLink>
          </ListItem>
        </List>
      </Box>
      <Box className="user last-element">
        <ListItemAvatar>
          <Avatar alt="UserImage" src={avatarImage} />
        </ListItemAvatar>
        <ListItemText primary={userName} secondary="Project Manager" />
      </Box>
    </Box>
  );
};
