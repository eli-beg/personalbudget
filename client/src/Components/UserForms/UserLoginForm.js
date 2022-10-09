import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useFormik } from "formik";
import * as yup from "yup";
import { loginApiUser } from "../../Api/User";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { setUserData } from "../../App/auth/authSlice";


const UserLoginForm = () => {
  const dispatch = useDispatch();
  const [userInvalid, setUserInvalid] = useState(false);

  const navigate = useNavigate();
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Must be a valid e-mail")
      .required("Please enter your email"),
    password: yup
      .string()
      .required("Please enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase"
      ),
  });

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
      if (data.ok === true) {
        dispatch(setUserData(data))
        navigate("/dashboard");
      }
      if (data.ok === false) {
        setUserInvalid(true);
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
              helperText={formik.touched.email && formik.errors.email}
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
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>
          <Grid item>
            <Button type="submit">Log In</Button>
          </Grid>
        </Grid>
      </form>
      <Dialog open={userInvalid}>
        <DialogContent>
          <Typography>Your email or password are not correct</Typography>
        </DialogContent>
        <DialogActions>
          <Button
            component={Link}
            to="/welcome-screen"
            onClick={() => setUserInvalid(false)}
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default UserLoginForm;
