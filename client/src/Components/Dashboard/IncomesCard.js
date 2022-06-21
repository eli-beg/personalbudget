import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const IncomesCard = () => {
  return (
    <Box
      sx={{
        height: "100%",
        backgroundColor: "#536dfe",
        borderRadius: "10px",
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="flex-end"
        sx={{ height: "100%" }}
        xs={12}
        ml={2}
      >
        <Grid item>
          <Typography variant="h3" color="text.blueGrey.50">
            Monto
          </Typography>
        </Grid>
        <Grid item mb={4}>
          <Typography variant="h6" color="text.blueGrey.50">
            My Incomes
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default IncomesCard;
