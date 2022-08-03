import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
  return (
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

        <Button
          variant="outlined"
          size="large"
          sx={{ width: "200px", margin: "50px" }}
        >
          <Link to="/main/dashboard" style={{ textDecoration: "none" }}>
            Login
          </Link>
        </Button>
        <Button
          variant="outlined"
          size="large"
          sx={{ width: "200px", margin: "50px" }}
        >
          <Link to="register" style={{ textDecoration: "none" }}>
            Register
          </Link>
        </Button>
      </Box>
    </Grid>
  );
};

export default Login;
