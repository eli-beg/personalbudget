import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from "@mui/material";
import { deleteApiCategory } from "../../../Api/Categories";

const DialogDeleteCategory = ({
  openDeleteModal,
  categorySelected,
  setOpenDeleteModal,
  getAllCategories,
}) => {
  const [openDeletedCategory, setOpenDeletedCategory] = useState(false);

  const deleteCategory = async (category) => {
    const { data } = await deleteApiCategory(category);
    if (data.ok === true) {
      setOpenDeletedCategory(true);
      getAllCategories();
    }
  };

  return (
    <>
      <Dialog open={openDeleteModal}>
        <DialogContent>
          <Typography>
            Are you sure you want to delete "
            {categorySelected && categorySelected.name}" category?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => deleteCategory(categorySelected)}>Yes</Button>
        </DialogActions>
        <DialogActions>
          <Button onClick={() => setOpenDeleteModal(false)}>No</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openDeletedCategory}>
        <DialogContent>
          <Typography>
            "{categorySelected && categorySelected.name}" has been removed!
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpenDeleteModal(false);
              setOpenDeletedCategory(false);
            }}
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DialogDeleteCategory;
