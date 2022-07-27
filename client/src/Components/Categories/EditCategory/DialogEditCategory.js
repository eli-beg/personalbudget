import React from "react";
import EditCategoryForm from "./EditCategoryForm";
import { Dialog, DialogContent, Typography } from "@mui/material";

const DialogEditCategory = ({
  openEditModal,
  categorySelected,
  setOpenEditModal,
  getAllCategories,
}) => {
  return (
    <Dialog open={openEditModal}>
      <Typography>Edit Category</Typography>
      <DialogContent>
        <EditCategoryForm
          category={categorySelected}
          setOpenEditModal={setOpenEditModal}
          getAllCategories={getAllCategories}
        />
      </DialogContent>
    </Dialog>
  );
};

export default DialogEditCategory;
