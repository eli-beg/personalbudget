import React, { useCallback, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import BalanceCard from "../Components/Dashboard/BalanceCard";
import IncomesCard from "../Components/Dashboard/IncomesCard";
import ExpensesCard from "../Components/Dashboard/ExpensesCard";
import ListOfTransactionsCard from "../Components/Transactions/ListOfTransactionsCard";
import { allTransactions, lastTenTransactions } from "../Api/Transactions";
import useIsMountedRef from "../hooks/useIsMountedRef";
import { getCategories } from "../Api/Categories";

const Dashboard = () => {
  const [allTransactionsInfoBalance, setAllTransactionsInfoBalance] =
    useState(null);
  const [allTransactionsDetails, setAllTransactionsDetails] = useState(null);
  const [allCategories, setAllCategories] = useState(null);

  const isMounted = useIsMountedRef();
  const drawerWidth = 240;

  const getAllTransactionsInfo = useCallback(async () => {
    try {
      const { data } = await allTransactions();

      if (isMounted) {
        setAllTransactionsInfoBalance(data);
      }
    } catch (error) {
      console.error(error);
    }
  }, [isMounted]);

  const getLastTenTransactions = useCallback(async () => {
    try {
      const { data } = await lastTenTransactions();

      if (isMounted) {
        setAllTransactionsDetails(data.lastTenTransactions);
      }
    } catch (error) {
      console.error(error);
    }
  }, [isMounted]);

  const getAllCategories = useCallback(async () => {
    try {
      const { data } = await getCategories();

      if (isMounted) {
        setAllCategories(data.getCategories);
      }
    } catch (error) {
      console.error(error);
    }
  }, [isMounted]);

  useEffect(() => {
    getAllTransactionsInfo();
    getAllCategories();
    getLastTenTransactions();
  }, [getAllTransactionsInfo, getAllCategories, getLastTenTransactions]);

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
        <Grid container spacing={2} p={2}>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <BalanceCard
              allTransactionsInfoBalance={allTransactionsInfoBalance}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <IncomesCard
              allTransactionsInfoBalance={allTransactionsInfoBalance}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <ExpensesCard
              allTransactionsInfoBalance={allTransactionsInfoBalance}
            />
          </Grid>
        </Grid>

        <Grid container px={2} xs={12} lg={12} sx={{ marginTop: "10px" }}>
          <Typography variant="h6" color="text.secondary">
            Your last ten recorded transactions:
          </Typography>
          <ListOfTransactionsCard
            transactionsDetails={allTransactionsDetails}
            allCategories={allCategories}
            getAllTransactionsInfo={getAllTransactionsInfo}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
