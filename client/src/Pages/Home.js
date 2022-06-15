import { Box } from "@mui/material";
import React, { useState } from "react";
import Dashboard from "../Components/Dashboard/Dashboard";
import HeaderBar from "../Components/Header/HeaderBar";
import SideBar from "../Components/Sidebar/SideBar";

const Home = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    console.log("ḧolisss");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <HeaderBar handleDrawerToggle={handleDrawerToggle} />
      <SideBar
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
      <Dashboard />
    </Box>
  );
};

export default Home;
