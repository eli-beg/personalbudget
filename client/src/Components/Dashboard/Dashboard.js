import React from "react";
import { Box, Typography } from "@mui/material";

const Dashboard = () => {
  const drawerWidth = 240;
  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 3,
        marginTop: "60px",
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        height: "100vh",
        borderRadius: "10px",
        backgroundColor: "#e0f2f1",
      }}
    >
      <Typography>Hola</Typography>
    </Box>
  );
};

export default Dashboard;
