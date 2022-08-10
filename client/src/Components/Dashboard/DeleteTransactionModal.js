import React from "react";
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { deleteTransaction } from "../../Api/Transactions";

const DeleteTransactionModal = ({
  openModalDelete,
  transaction,
  handleCloseDeleteModal,
}) => {
  const removeTransaction = async () => {
    await deleteTransaction({ id: transaction.id });
    handleCloseDeleteModal();
  };

  return (
    <Dialog open={openModalDelete}>
      <DialogTitle>
        Are you sure you want to delete the "{transaction.concept}" transaction?
      </DialogTitle>
      <DialogActions>
        <Button onClick={removeTransaction}>Yes</Button>
      </DialogActions>
      <DialogActions>
        <Button onClick={handleCloseDeleteModal}>No</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteTransactionModal;
