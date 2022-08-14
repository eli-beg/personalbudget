import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { createApiUser } from "../../Api/User";
import { Link } from "react-router-dom";

const UserRegisterForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const validationSchema = yup.object({
    firstname: yup
      .string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Please enter your firstname"),
    lastname: yup
      .string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Please enter your lastname"),
    email: yup
      .string()
      .email("Must be a valid e-mail")
      .required("Please enter your email"),
    password: yup
      .string()
      .required("Please enter your password")
      //  .matches(
      //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      // ),
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase"
      ),
  });
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const value = {
        firstname: values.firstname,
        lastname: values.lastname,
        email: values.email,
        password: values.password,
      };

      const { data } = await createApiUser(value);
      if (data.ok === true) {
        setSubmitted(true);
      }
    },
  });

  return (
    <Box
      sx={{
        height: "400px",
        width: "450px",
        padding: "20px",
        borderRadius: "7px",
        borderStyle: "solid",
        borderColor: "#e2e2e0",
      }}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="space-around"
        wrap="no-wrap"
        height="100%"
        padding="10px"
      >
        <Grid
          container
          item
          direction="column"
          alignItems="center"
          justifyContent="center"
          padding="10px"
        >
          <Typography variant="h6" color="text.primary">
            SIGN UP
          </Typography>
          <Link to="/welcome-screen">
            <Typography variant="h8" color="text.blueGrey.400">
              Already have an account?
            </Typography>
          </Link>
        </Grid>
        <Grid container item justifyContent="center" padding="10px">
          <form onSubmit={formik.handleSubmit}>
            <Grid container item spacing={2} direction="row" marginBottom={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="firstname"
                  value={formik.values.firstname}
                  label="First name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.touched.firstname && formik.errors.firstname
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="lastname"
                  value={formik.values.lastname}
                  label="Last name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={formik.touched.lastname && formik.errors.lastname}
                />
              </Grid>
            </Grid>
            <Grid
              container
              item
              spacing={2}
              direction="column"
              justifyContent="center"
            >
              <Grid item>
                <TextField
                  fullWidth
                  name="email"
                  value={formik.values.email}
                  label="Email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  name="password"
                  type="password"
                  value={formik.values.password}
                  label="Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Grid>
              <Grid container item justifyContent="center">
                <Button type="submit">Sing Up</Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
      <Dialog open={submitted}>
        <DialogContent>
          <Typography>Your user has been created!</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSubmitted(false)}>Ok</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default UserRegisterForm;
