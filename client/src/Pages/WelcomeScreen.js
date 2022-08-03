import React from "react";
import Grid from "@mui/material/Grid";
import WelcomeBackground from "../Components/WelcomeScreen/WelcomeBackground";
import { Outlet } from "react-router-dom";

const WelcomeScreen = () => {
  return (
    <Grid container wrap="wrap" sx={{ minHeight: "100vh" }}>
      <Outlet />
      <WelcomeBackground />
    </Grid>
  );
};

export default WelcomeScreen;
