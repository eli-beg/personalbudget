import React, { useState } from "react";
import {
  AppBar,
  Chip,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Menu from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import UserMenu from "./UserMenu";
import MenuUserSettings from "./MenuUserSettings";
import pig from "../../images/pig.jpg";
import useUserStorage from "../../hooks/useUserStorage";

const HeaderBar = ({ handleDrawerToggle }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const drawerWidth = 240;

  const { user } = useUserStorage();

  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        width: {
          md: `calc(100% - ${drawerWidth}px)`,
          height: "60px",
          backgroundColor: "white",
          boxShadow: "none",
        },
      }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          onClick={() => handleDrawerToggle()}
          sx={{ display: { md: "none" } }}
        >
          <Menu />
        </IconButton>
        <Grid
          item
          sx={{
            backgroundImage: `url(${pig})`,
            backgroundSize: "cover",
            width: "60px",
            height: "60px",
            display: { md: "none" },
          }}
        ></Grid>
        <Typography
          sx={{ display: { md: "none" } }}
          variant="h6"
          color="text.blueGrey.600"
        >
          pBudgetApp
        </Typography>
        <Box sx={{ flexGrow: 10 }}>
          <Typography
            varian="h6"
            color="text.blueGrey.600"
            sx={{ display: { xs: "none", sm: "none", md: "block" } }}
          >
            Welcome {user && user.userFirstname} !
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 0.3 }}>
          <Chip
            clickable
            onClick={handleOpenMenu}
            icon={<UserMenu />}
            sx={{
              paddingLeft: "20px",
              width: "125px",
              height: "50px",
              borderRadius: "20px",
            }}
          />
        </Box>
        <MenuUserSettings
          open={open}
          anchorEl={anchorEl}
          handleCloseMenu={handleCloseMenu}
        />
      </Toolbar>
    </AppBar>
  );
};

export default HeaderBar;
