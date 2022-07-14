import React, { useState } from "react";
import { Box } from "@mui/material";
import HeaderBar from "../Components/Header/HeaderBar";
import SideBar from "../Components/Sidebar/SideBar";
import { Outlet } from "react-router-dom";

const Home = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <HeaderBar handleDrawerToggle={handleDrawerToggle} />
      <SideBar
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
      <Outlet />
    </Box>
  );
};

export default Home;
