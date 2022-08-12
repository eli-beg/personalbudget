import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import DialogSubmittingForm from "../../DialogSubmittingForm";
import { createApiCategory } from "../../../Api/Categories";

const CreateCategoryForm = () => {
  const [openDialogSubmittingForm, setOpenDialogSubmittingForm] =
    useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openDialogDataExists, setOpenDialogDataExists] = useState(false);

  const dialogTitle = "category";

  const validationSchema = yup.object({
    name: yup
      .string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Name is Required!"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      userId: null,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const value = {
        name: values.name,
      };

      const { data } = await createApiCategory(value);

      if (data.ok === true && data.created === true) {
        setSubmitted(true);
      }
      if (data.ok === true && data.created === false) {
        setOpenDialogDataExists(true);
      }
    },
  });

  const formikSubmit = (formikValues) => {
    formik.handleSubmit(formikValues);
    formik.setSubmitting(false);
  };

  return (
    <form onReset={formik.handleReset}>
      <Grid container>
        <Grid>
          <TextField
            placeholder="Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            Name
          </TextField>
        </Grid>
        <Grid>
          <Button
            type="button"
            disabled={formik.isSubmitting}
            onClick={() => setOpenDialogSubmittingForm(true)}
          >
            Save
          </Button>
        </Grid>
        <DialogSubmittingForm
          openDialogSubmittingForm={openDialogSubmittingForm}
          setOpenDialogSubmittingForm={setOpenDialogSubmittingForm}
          dialogTitle={dialogTitle}
          formikValues={formik.values}
          formikSubmit={formikSubmit}
          submittedValues={submitted}
          setSubmitted={setSubmitted}
          formikReset={formik.handleReset}
          openDialogDataExists={openDialogDataExists}
          setOpenDialogDataExists={setOpenDialogDataExists}
        />
      </Grid>
    </form>
  );
};

export default CreateCategoryForm;
