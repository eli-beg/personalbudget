import React from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import UserRegisterForm from "../Components/UserForms/UserRegisterForm";

const RegisterScreen = () => {
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
        <UserRegisterForm />
      </Box>
    </Grid>
  );
};

export default RegisterScreen;
