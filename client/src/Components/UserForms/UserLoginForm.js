import React from "react";
import { Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useFormik } from "formik";
import * as yup from "yup";
import { loginApiUser } from "../../Api/User";
import { useNavigate } from "react-router-dom";

import useUserStorage from "../../hooks/useUserStorage";

const UserLoginForm = () => {
  const navigate = useNavigate();
  const validationSchema = yup.object({
    email: yup.string(),
    password: yup.string(),
  });
  const { setUserInStorage } = useUserStorage();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const value = {
        email: values.email,
        password: values.password,
      };

      const { data } = await loginApiUser(value);
      if (data.ok) {
        setUserInStorage(data);
        navigate(`/dashboard`);
      }
    },
  });

  return (
    <Box
      sx={{
        padding: "20px",
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <Grid container direction="column" spacing={1} alignItems="center">
          <Grid item>
            <TextField
              name="email"
              value={formik.values.email}
              label="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={formik.errors.email}
            />
          </Grid>
          <Grid item>
            <TextField
              name="password"
              type="password"
              value={formik.values.password}
              label="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={formik.errors.password}
            />
          </Grid>
          <Grid item>
            <Button type="submit">Log In</Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default UserLoginForm;
