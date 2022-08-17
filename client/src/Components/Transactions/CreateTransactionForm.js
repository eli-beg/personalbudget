import React, { useState } from "react";
import {
  Autocomplete,
  Button,
  Checkbox,
  createFilterOptions,
  FormControlLabel,
  FormGroup,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import CreateCategoryModal from "../Categories/CreateCategory/CreateCategoryModal";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { createTransaction } from "../../Api/Transactions";
import DialogSubmittingForm from "../DialogSubmittingForm";

const CreateTransactionForm = ({ allCategories, getAllCategories }) => {
  const [openDialogCategory, setOpenDialogCategory] = useState(false);
  const [newCategory, setNewCategory] = useState(null);

  const [openDialogSubmittingForm, setOpenDialogSubmittingForm] =
    useState(false);
  const [submitted, setSubmitted] = useState(false);

  const dialogTitle = "transaction";

  const handleCheckBoxChange = (setField, e) => {
    setField("type", e.target.value);
  };

  const handleChangeDate = (setField, e) => {
    setField("date", e);
  };

  const filter = createFilterOptions();

  const formikSubmit = (formikValues) => {
    formik.handleSubmit(formikValues);
    formik.setSubmitting(false);
  };

  const validationSchema = yup.object({
    type: yup.string(),
    concept: yup
      .string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Please provide a concept"),
    amount: yup
      .number()
      .typeError("Amount must be a number")
      .integer("Only integer numbers")
      .positive("Only positive numbers")
      .required("Please provide an amount"),
  });

  const formik = useFormik({
    initialValues: {
      type: "",
      concept: "",
      amount: "",
      date: "",
      categoryId: "",
    },

    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const value = {
        type: values.type,
        concept: values.concept,
        amount: values.amount,
        date: values.date,
        categoryId: values.categoryId.id,
      };

      const { data } = await createTransaction(value);
      if (data.ok === true) {
        setSubmitted(true);
        getAllCategories();
      }
    },
  });

  return (
    <form onReset={formik.handleReset}>
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          height: "100%",
          padding: 0,
        }}
      >
        <Grid
          item
          container
          display="flex"
          flexDirection="column"
          alignItems="center"
          wrap="no-wrap"
          px={5}
          xs={11}
          sm={9}
          md={9}
          lg={6}
          sx={{
            borderRadius: "7px",
            borderStyle: "solid",
            borderColor: "#e2e2e0",
            backgroundColor: "whitesmoke",
          }}
        >
          <Grid my={4} item xs={12} display="flex" justifyContent="center">
            <Typography variant="h6" color="text.primary">
              NEW TRANSACTION
            </Typography>
          </Grid>
          <Grid my={2} container item xs={12} spacing={2}>
            <Grid item xs={12} direction="column">
              <Typography variant="h7" color="text.secondary">
                Transaction Type*
              </Typography>
              <FormGroup row="true">
                <FormControlLabel
                  control={
                    <Checkbox
                      value="expense"
                      onChange={(e) =>
                        handleCheckBoxChange(formik.setFieldValue, e)
                      }
                      checked={formik.values.type === "expense" ? true : false}
                    />
                  }
                  name="expense"
                  label="Expense"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      value="income"
                      onChange={(e) =>
                        handleCheckBoxChange(formik.setFieldValue, e)
                      }
                      checked={formik.values.type === "income" ? true : false}
                    />
                  }
                  name="income"
                  label="Income"
                />
              </FormGroup>
            </Grid>
            <Grid item xs={12}>
              <Typography>Concept*</Typography>
              <TextField
                fullWidth
                hiddenLabel
                size="small"
                name="concept"
                value={formik.values.concept}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={formik.touched.concept && formik.errors.concept}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Amount*</Typography>
              <TextField
                fullWidth
                hiddenLabel
                size="small"
                name="amount"
                value={formik.values.amount}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={formik.touched.amount && formik.errors.amount}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Category</Typography>
              <Autocomplete
                fullWidth
                value={formik.values.categoryId}
                onChange={(event, newValue) => {
                  if (typeof newValue === "string") {
                    formik.setFieldValue("categoryId", newValue);
                  } else if (newValue && newValue.inputValue) {
                    setOpenDialogCategory(true);
                    setNewCategory(newValue.inputValue);
                  } else {
                    formik.setFieldValue("categoryId", newValue);
                  }
                }}
                filterOptions={(options, params) => {
                  const filtered = filter(options, params);

                  const { inputValue } = params;

                  const isExisting = options.some(
                    (option) => inputValue === option.name
                  );
                  if (inputValue !== "" && !isExisting) {
                    filtered.push({
                      inputValue,
                      name: `Add "${inputValue}"`,
                    });
                  }

                  return filtered;
                }}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                options={allCategories ? allCategories : []}
                getOptionLabel={(option) => {
                  if (typeof option === "string") {
                    return option;
                  }

                  if (option.inputValue) {
                    return option.inputValue;
                  }

                  return option.name;
                }}
                renderOption={(props, option) => (
                  <li {...props}>{option.name}</li>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    helperText={
                      formik.values.type === "income"
                        ? "You can only add categories to expenses"
                        : null
                    }
                  />
                )}
                disabled={formik.values.type === "income" ? true : false}
              />
              <CreateCategoryModal
                open={openDialogCategory}
                onClose={() => setOpenDialogCategory(false)}
                newCategory={newCategory}
                setField={formik.setFieldValue}
                setOpenDialogCategory={setOpenDialogCategory}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Date</Typography>
              <DesktopDatePicker
                inputFormat="dd/MM/yyyy"
                value={formik.values.date}
                onChange={(e) => handleChangeDate(formik.setFieldValue, e)}
                onBlur={formik.handleBlur}
                helperText={formik.errors.date}
                renderInput={(params) => <TextField {...params} />}
                maxDate={new Date()}
              />
            </Grid>
          </Grid>
          <Grid my={4} item xs={12}>
            <Button
              type="button"
              onClick={() => setOpenDialogSubmittingForm(true)}
              disabled={formik.isSubmitting}
            >
              Save
            </Button>
            <Button type="reset" onClick={() => getAllCategories()}>
              Clean
            </Button>
          </Grid>
        </Grid>
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
        getAllCategories={getAllCategories}
      />
    </form>
  );
};

export default CreateTransactionForm;
