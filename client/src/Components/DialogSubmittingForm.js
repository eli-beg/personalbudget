import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from "@mui/material";

const DialogSubmittingForm = ({
  setOpenDialogSubmittingForm,
  openDialogSubmittingForm,
  dialogTitle,
  formikValues,
  formikSubmit,
  submittedValues,
  setSubmitted,
  formikReset,
  openDialogDataExists,
  setOpenDialogDataExists,
  setCloseDialogForm,
}) => {
  return (
    <>
      <Dialog open={openDialogSubmittingForm}>
        <DialogContent>
          <Typography>
            Are you sure you want to save this {dialogTitle}?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            type="submit"
            onClick={() => {
              formikSubmit(formikValues);
              setOpenDialogSubmittingForm(false);
            }}
          >
            Yes
          </Button>
          <Button
            type="button"
            onClick={() => setOpenDialogSubmittingForm(false)}
          >
            No
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={submittedValues}>
        <DialogContent>
          <Typography>Your {dialogTitle} has been saved</Typography>
        </DialogContent>

        <DialogActions>
          <Button
            type="button"
            onClick={() => {
              setSubmitted(false);
              formikReset();
              setCloseDialogForm && setCloseDialogForm(true);
            }}
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>

      {dialogTitle === "category" && (
        <Dialog open={openDialogDataExists}>
          <Typography>The {dialogTitle} already exists!</Typography>
          <DialogActions>
            <Button
              type="button"
              onClick={() => {
                setOpenDialogDataExists(false);
                formikReset();
              }}
            >
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};

export default DialogSubmittingForm;
