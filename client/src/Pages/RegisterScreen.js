import React from "react";
import { Grid } from "@mui/material";
import UserRegisterForm from "../Components/UserForms/UserRegisterForm";

const RegisterScreen = () => {
  return (
    <Grid
      item
      xs={12}
      lg={6}
      xl={6}
      sx={{
        backgroundColor: "whitesmoke",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <UserRegisterForm />
    </Grid>
  );
};

export default RegisterScreen;
