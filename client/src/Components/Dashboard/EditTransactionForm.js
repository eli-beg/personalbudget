import React, { useState } from "react";
import {
  Grid,
  Autocomplete,
  TextField,
  Typography,
  Button,
  createFilterOptions,
  InputAdornment,
} from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { updateTransaction } from "../../Api/Transactions";
import { useFormik } from "formik";
import * as yup from "yup";
import CreateCategoryModal from "./CreateCategoryModal";
import DialogSubmittingForm from "../DialogSubmittingForm";

const EditTransactionForm = ({
  transaction,
  setCloseDialogForm,
  allCategories,
  getAllTransactionsInfo,
}) => {
  const [openDialogCategory, setOpenDialogCategory] = useState(false);
  const [newCategory, setNewCategory] = useState(null);
  const [openDialogSubmittingForm, setOpenDialogSubmittingForm] =
    useState(false);
  const [submitted, setSubmitted] = useState(false);

  const dialogTitle = "change";

  const filter = createFilterOptions();

  const formikSubmit = (formikValues) => {
    formik.handleSubmit(formikValues);
    formik.setSubmitting(false);
  };

  const validationSchema = yup.object({
    concept: yup
      .string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Concept is Required!"),
    amount: yup
      .number()
      .integer("Only integer numbers")
      .positive("Only positive numbers"),
    date: yup.date(),
  });

  const formik = useFormik({
    initialValues: {
      id: transaction.id,
      type: transaction.type,
      concept: transaction.concept,
      amount: transaction.amount,
      date: transaction.date,
      categoryId: allCategories.find(
        (category) => category.id === transaction.categoryId
      ),
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const value = {
        id: transaction.id,
        type: transaction.type,
        concept: values.concept,
        amount: values.amount,
        date: values.date,
        categoryId:
          transaction.type === "expense" ? values.categoryId.id : null,
      };

      const { data } = await updateTransaction(value);
      if (data.ok === true) {
        setSubmitted(true);
        getAllTransactionsInfo();
      }
    },
  });

  const handleChangeDate = (setField, e) => {
    setField("date", e);
  };

  return (
    <form onReset={formik.handleReset}>
      <Grid container rowSpacing={3}>
        <Grid xs={12} item direction="column">
          <Typography>Type of Transaction</Typography>
          <TextField
            fullWidth
            hiddenLabel
            variant="filled"
            size="small"
            name="type"
            value={formik.values.type}
            helperText={"you can not modify this field "}
            disabled={true}
          />
        </Grid>

        <Grid xs={12} item direction="column">
          <Typography>Concept</Typography>

          <TextField
            fullWidth
            hiddenLabel
            variant="filled"
            size="small"
            name="concept"
            value={formik.values.concept}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText={formik.errors.concept}
          />
        </Grid>

        <Grid xs={12} item direction="column">
          <Typography>Amount</Typography>
          <TextField
            fullWidth
            hiddenLabel
            variant="filled"
            size="small"
            name="amount"
            value={formik.values.amount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText={formik.errors.amount}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid xs={12} item direction="column">
          <Typography>Category</Typography>
          <Autocomplete
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
            renderOption={(props, option) => <li {...props}>{option.name}</li>}
            renderInput={(params) => <TextField {...params} />}
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

        <Grid xs={12} item direction="column">
          <Typography>Date</Typography>

          <DesktopDatePicker
            inputFormat="dd/MM/yyyy"
            value={formik.values.date}
            onChange={(e) => handleChangeDate(formik.setFieldValue, e)}
            onBlur={formik.handleBlur}
            helperText={formik.errors.date}
            renderInput={(params) => <TextField {...params} />}
            fullWidth
          />
        </Grid>
        <Grid
          container
          item
          xs={12}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            type="button"
            disabled={formik.isSubmitting}
            onClick={() => setOpenDialogSubmittingForm(true)}
          >
            Save
          </Button>

          <Button onClick={() => setCloseDialogForm(true)}>Don't save</Button>
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
          setCloseDialogForm={setCloseDialogForm}
          getAllTransactionsInfo={getAllTransactionsInfo}
        />
      </Grid>
    </form>
  );
};

export default EditTransactionForm;
