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
import { useFormik } from "formik";
import * as yup from "yup";
import { updateApiCategory } from "../../../Api/Categories";

const EditCategoryForm = ({ category, setOpenEditModal, getAllCategories }) => {
  const [openDialogSaved, setOpenDialogSaved] = useState(false);

  const validationSchema = yup.object({
    name: yup
      .string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Name is Required!"),
  });

  const formik = useFormik({
    initialValues: {
      id: category.id,
      name: category.name,
      userId: category.userId,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const value = {
        id: category.id,
        name: values.name,
        userId: category.userId,
      };

      console.log("hello", value);
      const { data } = await updateApiCategory(value);
      if (data.ok === true) {
        getAllCategories();
      }
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Grid container direction="column">
          <Grid item xs={12}>
            <Typography>Category Name</Typography>
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              hiddenLabel
              variant="filled"
              size="small"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={formik.errors.name}
            />
          </Grid>
          <Grid item>
            <Button type="submit" onClick={() => setOpenDialogSaved(true)}>
              Save
            </Button>
          </Grid>
          <Grid item>
            <Button onClick={() => setOpenEditModal(false)}>Don't save</Button>
          </Grid>
        </Grid>
      </form>
      <Dialog open={openDialogSaved}>
        <DialogContent>
          <Typography>Your Category has been saved!</Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpenDialogSaved(false);
              setOpenEditModal(false);
            }}
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EditCategoryForm;
