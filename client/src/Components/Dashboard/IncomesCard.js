import React from "react";
import { Typography, Grid, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import money from "../../images/money-bag.png";

const IncomesCard = ({ allTransactionsInfoBalance }) => {
  return (
    <Grid
      container
      direction="row"
      sx={{
        height: "100%",
        width: "100%",
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="flex-end"
        alignItems="center"
        xs={6}
      >
        <Grid item>
          <Typography variant="h3" color="text.blueGrey.50">
            $
            {allTransactionsInfoBalance
              ? allTransactionsInfoBalance.sumOfIncomes
              : null}
          </Typography>
        </Grid>
        <Grid item mb={4}>
          <Typography variant="h6" color="text.blueGrey.50">
            My Incomes
          </Typography>
        </Grid>
      </Grid>
      <Grid container direction="row" xs={6}>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-start"
        >
          <IconButton sx={{ color: "white" }}>
            <AddIcon />
          </IconButton>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            sx={{
              backgroundImage: `url(${money})`,
              backgroundSize: "cover",
              width: "100px",
              height: "100px",
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default IncomesCard;
