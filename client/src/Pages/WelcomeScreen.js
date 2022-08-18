import React from "react";
import Grid from "@mui/material/Grid";
import WelcomeBackground from "../Components/WelcomeScreen/WelcomeBackground";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const WelcomeScreen = () => {
  return (
    <Box
      sx={{
        backgroundColor: "whitesmoke",
        height: "100%",
      }}
    >
      <Grid
        container
        display="flex"
        flexWrap="wrap"
        sx={{ minHeight: "100vh" }}
      >
        <Outlet />
        <WelcomeBackground />
      </Grid>
    </Box>
  );
};

export default WelcomeScreen;
