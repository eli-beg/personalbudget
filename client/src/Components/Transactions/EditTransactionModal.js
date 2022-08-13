import React from "react";
import { Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import EditTransactionForm from "./EditTransactionForm";

const EditTransactionModal = ({
  openEditModal,
  handleCloseEditModal,
  setCloseDialogForm,
  transactionSelected,
  getAllTransactionsInfo,
  allCategories,
}) => {
  return (
    <Dialog open={openEditModal} onClose={handleCloseEditModal}>
      <DialogTitle>
        <Typography variant="h6" color="text.primary">
          Edit transaction
        </Typography>
      </DialogTitle>
      <DialogContent>
        <EditTransactionForm
          transaction={transactionSelected}
          setCloseDialogForm={setCloseDialogForm}
          getAllTransactionsInfo={getAllTransactionsInfo}
          allCategories={allCategories}
        />
      </DialogContent>
    </Dialog>
  );
};

export default EditTransactionModal;
