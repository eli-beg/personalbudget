import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import BalanceCard from "./BalanceCard";
import IncomesCard from "./IncomesCard";
import ExpensesCard from "./ExpensesCard";
import ListOfTransactionsCard from "./ListOfTransactionsCard";

const Dashboard = ({
  allTransactionsInfoBalance,
  allTransactionsDetails,
  allCategories,
  getAllTransactionsInfo,
  setAllTransactionsDetails,
}) => {
  const drawerWidth = 240;

  return (
    <Box
      sx={{
        marginTop: "60px",
        width: { xs: "100%", md: `calc(100% - ${drawerWidth}px)` },
        height: "100%",
        backgroundColor: "#e0f2f1",
        borderRadius: "10px",
      }}
    >
      <Grid
        container
        justifyContent="center"
        sx={{
          marginTop: "16px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Box
              sx={{
                height: "250px",
                width: "100%",
                borderRadius: "10px",
                backgroundColor: "#0097a7",
              }}
            >
              <BalanceCard
                allTransactionsInfoBalance={allTransactionsInfoBalance}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Box
              sx={{
                height: "250px",
                width: "100%",
                backgroundColor: "#536dfe",
                borderRadius: "10px",
              }}
            >
              <IncomesCard
                allTransactionsInfoBalance={allTransactionsInfoBalance}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Box
              sx={{
                width: "100%",
                height: "250px",
                borderRadius: "10px",
                backgroundColor: "#0091ea",
              }}
            >
              <ExpensesCard
                allTransactionsInfoBalance={allTransactionsInfoBalance}
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container item xs={12} lg={12} sx={{ marginTop: "10px" }}>
          <ListOfTransactionsCard
            allTransactionsDetails={allTransactionsDetails}
            allCategories={allCategories}
            getAllTransactionsInfo={getAllTransactionsInfo}
            setAllTransactionsDetails={setAllTransactionsDetails}
          />
        </Grid>

        {/* <Grid xs={12} sm={12} md={8} lg={8} item>
          <Box
            sx={{ width: "100%", height: "500px", backgroundColor: "red" }}
          ></Box>
        </Grid>
        <Grid xs={12} sm={12} md={4} lg={4} item>
          <Box
            sx={{ width: "100%", height: "500px", backgroundColor: "green" }}
          ></Box>
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default Dashboard;
