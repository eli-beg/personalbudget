import React from "react";
import { Box, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import BalanceCard from "./BalanceCard";
import IncomesCard from "./IncomesCard";
import ExpensesCard from "./ExpensesCard";

const Dashboard = () => {
  const drawerWidth = 240;
  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 3,
        marginTop: "60px",
        width: { sm: "100%", md: `calc(100% - ${drawerWidth}px)` },
        height: "100vh",
        borderRadius: "10px",
        backgroundColor: "#e0f2f1",
      }}
    >
      <Grid container xs={12} spacing={2}>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Box
            sx={{
              height: "250px",
            }}
          >
            <BalanceCard />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Box sx={{ height: "250px" }}>
            <IncomesCard />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Box sx={{ height: "250px" }}>
            <ExpensesCard />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
