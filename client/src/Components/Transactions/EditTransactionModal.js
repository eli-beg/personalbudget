import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
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
      <DialogTitle>Edit transaction</DialogTitle>
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
