import React, { useCallback, useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Grid } from "@mui/material";
import ListOfCategoriesCard from "../Components/Categories/ListOfCategoriesCard";
import useIsMountedRef from "../hooks/useIsMountedRef";
import { getNumberOfTransactions } from "../Api/Transactions";

ChartJS.register(ArcElement, Tooltip, Legend);

const AllCategories = () => {
  const [counterOfTransactionsByCategory, setCounterOfTransactionsByCategory] =
    useState(null);

  const isMounted = useIsMountedRef();

  const getAllCategories = useCallback(async () => {
    try {
      const { data } = await getNumberOfTransactions();
      console.log("hello", data);
      if (isMounted) {
        setCounterOfTransactionsByCategory(data.transactionsCounterByCategory);
      }
    } catch (error) {
      console.error(error);
    }
  }, [isMounted]);

  useEffect(() => {
    getAllCategories();
  }, [getAllCategories]);

  const drawerWidth = 240;

  const data = {
    datasets: [
      {
        data: [10, 20, 30],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235,0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
      },
    ],
    labels: ["Red", "Yellow", "Blue"],
  };

  return (
    <Box
      sx={{
        marginTop: "60px",
        width: { xs: "100%", md: `calc(100% - ${drawerWidth}px)` },
        height: "100vh",
        backgroundColor: "#e0f2f1",
        borderRadius: "10px",
      }}
    >
      <Grid container marginTop={6} padding={2} columnSpacing={4}>
        <Grid item lg={3}>
          <Doughnut data={data} />
        </Grid>
        <Grid item lg={9}>
          <Box
            sx={{
              backgroundColor: "white",
              width: "100%",
              height: "400px",
              marginRight: "20px",
              borderRadius: "6px",
            }}
          >
            <ListOfCategoriesCard
              counterOfTransactionsByCategory={counterOfTransactionsByCategory}
              getAllCategories={getAllCategories}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AllCategories;
