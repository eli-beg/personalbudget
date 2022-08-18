import React from "react";
import { Grid } from "@mui/material";
import welcomeScreenImage from "../../images/welcomeScreenImage.jpg";

const WelcomeBackground = () => {
  return (
    <Grid
      item
      sx={{
        backgroundImage: `url(${welcomeScreenImage})`,
        backgroundSize: "cover",
      }}
      xs={12}
      lg={6}
      xl={6}
    ></Grid>
  );
};

export default WelcomeBackground;
