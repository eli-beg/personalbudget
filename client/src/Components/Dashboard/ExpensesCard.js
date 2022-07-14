import React from "react";
import { Typography, Grid, IconButton, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import wallet from "../../images/wallet.png";

const ExpensesCard = ({ allTransactionsInfoBalance }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "200px",
        borderRadius: "10px",
        backgroundColor: "#0091ea",
      }}
    >
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
                ? allTransactionsInfoBalance.sumOfExpenses
                : null}
            </Typography>
          </Grid>
          <Grid item mb={4}>
            <Typography variant="h6" color="text.blueGrey.50">
              My Expenses
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
                backgroundImage: `url(${wallet})`,
                backgroundSize: "cover",
                width: "100px",
                height: "100px",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExpensesCard;
