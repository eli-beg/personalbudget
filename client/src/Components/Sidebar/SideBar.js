import React from "react";
import { Drawer, Box } from "@mui/material";
import MenuCard from "./MenuCard";

const SideBar = ({ handleDrawerToggle, mobileOpen }) => {
  const drawerWidth = 240;

  return (
    <Box
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
      }}
    >
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },

          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            borderColor: "white",
          },
        }}
      >
        <MenuCard />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            borderColor: "white",
          },
        }}
        open
      >
        <MenuCard />
      </Drawer>
    </Box>
  );
};

export default SideBar;
