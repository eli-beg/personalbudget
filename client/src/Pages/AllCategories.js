import React, { useCallback, useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Grid, Typography } from "@mui/material";
import ListOfCategoriesCard from "../Components/Categories/ListOfCategoriesCard";
import useIsMountedRef from "../hooks/useIsMountedRef";
import { getNumberOfTransactions } from "../Api/Transactions";

ChartJS.register(ArcElement, Tooltip, Legend);

const AllCategories = () => {
  const [counterOfTransactionsByCategory, setCounterOfTransactionsByCategory] =
    useState(null);
  const [dataLists, setDataList] = useState(null);
  const [labels, setLabels] = useState(null);

  const isMounted = useIsMountedRef();

  const getAllCategories = useCallback(async () => {
    try {
      const { data } = await getNumberOfTransactions();

      if (isMounted) {
        setCounterOfTransactionsByCategory(data.transactionsCounterByCategory);
        const counter = data.transactionsCounterByCategory;
        const counterDataList = counter.map((category) => category.count);
        setDataList(counterDataList);
        const counterLabels = counter.map((category) => category.name);
        setLabels(counterLabels);
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
        data: dataLists && dataLists,
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
    labels: labels && labels,
  };

  return (
    <Box
      sx={{
        marginTop: "60px",
        width: { xs: "100%", md: `calc(100% - ${drawerWidth}px)` },
        height: { xs: "100%", md: "100vh" },
        backgroundColor: "#e0f2f1",
        borderRadius: "10px",
      }}
    >
      <Grid
        container
        padding={2}
        marginTop={8}
        display="flex"
        direction="row"
        justifyContent="center"
        spacing={2}
        xs={12}
      >
        <Grid container item spacing={2} justifyContent="center" lg={6}>
          <Grid item xs={6}>
            <Typography align="center">
              Number of transactions by category
            </Typography>
          </Grid>
          <Grid item xs={10} lg={7}>
            <Doughnut data={data} />
          </Grid>
        </Grid>
        <Grid container item spacing={2} justifyContent="center" xs={12} lg={6}>
          <Grid item xs={6}>
            <Typography align="center">All Categories</Typography>
          </Grid>
          <Grid item xs={12}>
            <ListOfCategoriesCard
              counterOfTransactionsByCategory={counterOfTransactionsByCategory}
              getAllCategories={getAllCategories}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AllCategories;
