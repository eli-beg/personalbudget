import React, { useState } from "react";
import { AppBar, Chip, IconButton, Toolbar } from "@mui/material";
import Menu from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import UserMenu from "./UserMenu";
import MenuUserSettings from "./MenuUserSettings";

const HeaderBar = ({ handleDrawerToggle }) => {
  const drawerWidth = 240;

  const [anchorEl, setAnchorEl] = useState(null);

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
        <Box sx={{ flexGrow: 2 }}></Box>
        <Box sx={{ flexGrow: 0.3 }}>
          <Chip
            clickable
            onClick={handleOpenMenu}
            icon={<UserMenu />}
            sx={{
              width: "110px",
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
