import React from "react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import useScreenDimension from "../../hooks/useScreenDimensions";
import Menu from "@mui/icons-material/Menu";

const HeaderBar = ({ handleDrawerToggle }) => {
  const dimension = useScreenDimension();

  const drawerWidth = 240;

  return (
    <Box>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: {
            sm: `calc(100% - ${drawerWidth}px)`,
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
            sx={{ display: { sm: "none" } }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" color="text.blueGrey.600">
            Hola
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderBar;
