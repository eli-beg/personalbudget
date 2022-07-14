import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import welcomeScreenImage from "../images/welcomeScreenImage.jpg";

const WelcomeScreen = () => {
  return (
    <Grid container wrap="wrap" sx={{ minHeight: "100vh" }}>
      <Grid item xs={12} lg={6} xl={6}>
        <Box
          sx={{
            backgroundColor: "whitesmoke",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" color="text.primary">
            Welcome to pBudgetApp!{" "}
          </Typography>
          <Typography variant="h6" color="text.blueGrey.600">
            Organize your finances and keep control over your pBudgetApp{" "}
          </Typography>
          <Typography variant="h6" color="text.blueGrey.600">
            - Choose you categories for expenses
          </Typography>
          <Typography variant="h6" color="text.blueGrey.600">
            - Add your incomes
          </Typography>
          <Typography variant="h6" color="text.blueGrey.600">
            - See visual graphs of your spending habits and control your money
          </Typography>
          <Button
            variant="outlined"
            size="large"
            sx={{ width: "200px", margin: "50px" }}
          >
            <Link to="/dashboard" style={{ textDecoration: "none" }}>
              homee
            </Link>
          </Button>
        </Box>
      </Grid>
      <Grid
        item
        sx={{
          backgroundImage: `url(${welcomeScreenImage})`,
          backgroundSize: "cover",
        }}
        xs={12}
        lg={6}
        xl={6}
      />
    </Grid>
  );
};

export default WelcomeScreen;
