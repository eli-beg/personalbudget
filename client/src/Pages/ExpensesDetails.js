import React, { useCallback, useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import ExpensesCard from "../Components/Dashboard/ExpensesCard";
import ListOfTransactionsCard from "../Components/Dashboard/ListOfTransactionsCard";
import { allTransactions } from "../Api/Transactions";
import useIsMountedRef from "../hooks/useIsMountedRef";
import { getCategories } from "../Api/Categories";
import formatISO from "date-fns/formatISO";

const ExpensesDetails = () => {
  const drawerWidth = 240;

  const [allTransactionsInfoBalance, setAllTransactionsInfoBalance] =
    useState(null);
  const [expensesDetails, setExpensesDetails] = useState(null);
  const [allCategories, setAllCategories] = useState(null);

  const isMounted = useIsMountedRef();

  const getAllTransactionsInfo = useCallback(async () => {
    try {
      const { data } = await allTransactions();

      const allTransactionsList = data.allTransactions;

      allTransactionsList &&
        allTransactionsList.sort((a, b) => a.date < b.date);

      const expensesList = allTransactionsList.filter(
        (t) => t.type === "expense"
      );

      if (isMounted) {
        setAllTransactionsInfoBalance(data);
        setExpensesDetails(expensesList);
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
  }, [getAllTransactionsInfo, getAllCategories]);

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
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Box
            sx={{
              width: "100%",
              height: "200px",
              borderRadius: "10px",
              backgroundColor: "#0091ea",
            }}
          >
            <ExpensesCard
              allTransactionsInfoBalance={allTransactionsInfoBalance}
            />
          </Box>
        </Grid>

        <Grid container item xs={12} lg={12} sx={{ marginTop: "10px" }}>
          <ListOfTransactionsCard
            transactionsDetails={expensesDetails}
            allCategories={allCategories}
            getAllTransactionsInfo={getAllTransactionsInfo}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExpensesDetails;
