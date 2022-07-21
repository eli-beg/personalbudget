import React, { useState } from "react";
import {
  Autocomplete,
  Button,
  Checkbox,
  createFilterOptions,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  FormGroup,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import CreateCategoryModal from "../Dashboard/CreateCategoryModal";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { createTransaction } from "../../Api/Transactions";

const CreateTransactionForm = ({ allCategories }) => {
  const [openDialogCategory, setOpenDialogCategory] = useState(false);
  const [newCategory, setNewCategory] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [openDialogSaved, setOpenDialogSaved] = useState(false);

  const handleCheckBoxChange = (setField, e) => {
    setField("type", e.target.value);
  };

  const handleChangeDate = (setField, e) => {
    setField("date", e);
  };

  const filter = createFilterOptions();

  const validationSchema = yup.object({
    type: yup.string(),
    concept: yup
      .string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Concept is Required!"),
    amount: yup
      .number()
      .integer("Only integer numbers")
      .positive("Only positive numbers"),
  });

  const formik = useFormik({
    initialValues: {
      type: "",
      concept: "",
      amount: "",
      date: "",
      categoryId: "",
      userId: null,
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
      console.log("para el onsubmit", value);
      await createTransaction(value);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
      <Grid container justifyContent="center">
        <Grid
          item
          container
          direction="column"
          marginTop="15px"
          borderRadius="3px"
          lg={10}
          sx={{ backgroundColor: "white" }}
        >
          <Grid item>
            <Typography>Type of Transaction</Typography>
            <FormGroup>
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
          <Grid item>
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
          <Grid>
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
          <Grid>
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
              renderOption={(props, option) => (
                <li {...props}>{option.name}</li>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  // label={categoryToEdit ? categoryToEdit : ""}
                />
              )}
            />
            <CreateCategoryModal
              open={openDialogCategory}
              onClose={() => setOpenDialogCategory(false)}
              newCategory={newCategory}
              setField={formik.setFieldValue}
              setOpenDialogCategory={setOpenDialogCategory}
            />
          </Grid>
          <Grid>
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
          <Grid>
            <Button
              type="submit"
              onClick={() => setOpenDialog(true)}
              disabled={formik.isSubmitting}
            >
              Save
            </Button>
            <Button type="reset">Clean</Button>
          </Grid>
          <Dialog open={openDialog}>
            <DialogTitle>Saving Transaction</DialogTitle>
            <DialogContent>
              Are you sure you want to save this transaction?
            </DialogContent>
            <DialogActions>
              <Button
                type="button"
                onClick={() => {
                  formik.setSubmitting(false);
                  setOpenDialog(false);
                  setOpenDialogSaved(true);
                }}
              >
                Yes
              </Button>
              <Button type="button" onClick={() => setOpenDialog(false)}>
                No
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog open={openDialogSaved}>
            <DialogContent>Your Transaction has been saved!</DialogContent>
            <DialogActions>
              <Button
                type="reset"
                onClick={() => {
                  setOpenDialogSaved(false);
                  formik.handleReset();
                }}
              >
                Ok
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </Grid>
    </form>
  );
};

export default CreateTransactionForm;
