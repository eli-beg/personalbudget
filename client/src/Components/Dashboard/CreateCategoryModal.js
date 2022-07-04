import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import React, { useCallback } from "react";
import { createApiCategory } from "../../Api/Categories";

const CreateCategoryModal = ({
  open,
  onClose,
  newCategory,
  setField,
  setOpenDialogCategory,
}) => {
  const createNewCategory = useCallback(async () => {
    try {
      const { data } = await createApiCategory({ name: newCategory });
      if (data.ok) {
        setField("categoryId", data.category);
      }
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        Do you want to create a new category called "{newCategory}"
      </DialogTitle>
      <DialogActions>
        <Button onClick={() => createNewCategory()}>Yes</Button>
        <Button onClick={() => setOpenDialogCategory(false)}>No</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateCategoryModal;
