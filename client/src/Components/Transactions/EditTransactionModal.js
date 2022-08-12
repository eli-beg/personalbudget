import React from "react";
import { Box } from "@mui/system";
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
    <Box>
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
    </Box>
  );
};

export default EditTransactionModal;
