import React from "react";
import { Box } from "@mui/system";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Typography } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

const AllCategories = () => {
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
    <Box sx={{ width: "300px", height: "300px" }}>
      <Typography>holaaa</Typography>

      <Doughnut data={data} />
    </Box>
  );
};

export default AllCategories;
