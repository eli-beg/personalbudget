import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import UserLoginForm from "../UserForms/UserLoginForm";

const Login = () => {
  return (
    <Grid
      container
      xs={12}
      lg={6}
      xl={6}
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      {" "}
      <Grid xs={10} lg={8} container item>
        <Grid container item justifyContent="center" padding="10px">
          <Grid item>
            <Typography variant="h3" color="text.primary" textAlign="center">
              Welcome to pBudgetApp!{" "}
            </Typography>
          </Grid>
          <Grid>
            <Typography
              variant="h6"
              color="text.blueGrey.600"
              textAlign="center"
            >
              Organize your finances and keep control over your pBudgetApp{" "}
            </Typography>
          </Grid>
        </Grid>
        <Grid container item margin="10px" justifyContent="center">
          <UserLoginForm />
        </Grid>
        <Grid container item direction="column" alignItems="center">
          <Link to="register" style={{ textDecoration: "none" }}>
            <Button>Register</Button>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
