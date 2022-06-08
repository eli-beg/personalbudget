import { AppBar, Grid, Typography } from "@mui/material";
import React from "react";
import NavBar from "../Components/NavBar";

const Home = () => {
  return (
    <div>
      <Grid container direction="row">
        <Grid item xs={1}>
          <NavBar />
        </Grid>
        <Grid item xs={11}>
          <Typography>Hola home</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
