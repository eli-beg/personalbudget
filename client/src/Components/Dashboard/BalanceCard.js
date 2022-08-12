import React from "react";
import { Typography, Grid, IconButton, Box } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import budget from "../../images/budget.png";

const BalanceCard = ({ allTransactionsInfoBalance }) => {
  return (
    <Box
      sx={{
        height: "200px",
        width: "100%",
        borderRadius: "10px",
        backgroundColor: "#0097a7",
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
          item
          direction="column"
          justifyContent="flex-end"
          alignItems="center"
          xs={6}
        >
          <Grid item>
            <Typography variant="h3" color="text.blueGrey.50">
              $
              {allTransactionsInfoBalance
                ? allTransactionsInfoBalance.finalBalance
                : null}
            </Typography>
          </Grid>
          <Grid item mb={4}>
            <Typography variant="h6" color="text.blueGrey.50">
              My Balance
            </Typography>
          </Grid>
        </Grid>
        <Grid container item direction="row" xs={6} sm={6}>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="flex-start"
          >
            {/* <IconButton sx={{ color: "white" }}>
              <MoreVertIcon />
            </IconButton> */}
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
                backgroundImage: `url(${budget})`,
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

export default BalanceCard;
