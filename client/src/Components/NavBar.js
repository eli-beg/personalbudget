import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const NavBar = () => {
  return (
    <Box>
      <AppBar>
        <Toolbar
          sx={{
            backgroundColor: "#2596be",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Typography>Hola</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
