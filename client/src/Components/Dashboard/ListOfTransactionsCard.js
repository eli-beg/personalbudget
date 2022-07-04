import React, { useEffect, useState } from "react";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import EditTransactionForm from "./EditTransactionForm";
import format from "date-fns/format";
import { set } from "date-fns";
import DeleteTransactionModal from "./DeleteTransactionModal";

const ListOfTransactionsCard = ({
  allTransactionsDetails,
  allCategories,
  getAllTransactionsInfo,
}) => {
  const [open, setOpen] = useState(false);
  const [transactionToEdit, setTransactionToEdit] = useState(null);
  const [transactionToDelete, setTransactionToDelete] = useState(null);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [closeDialogForm, setCloseDialogForm] = useState(false);
  console.log("hello categories", allCategories);
  console.log("hello categories", allTransactionsDetails);

  const handleOpen = (transaction) => {
    setOpen(true);
    setTransactionToEdit(transaction);
  };

  const handleClose = () => {
    setOpen(false);
    getAllTransactionsInfo();
  };

  const handleOpenDeleteModal = (transaction) => {
    setOpenModalDelete(true);
    setTransactionToDelete(transaction);
  };

  const handleCloseDeleteModal = () => {
    setOpenModalDelete(false);
    getAllTransactionsInfo();
  };

  console.log("hola delete", transactionToDelete);

  useEffect(() => {
    if (closeDialogForm) {
      setOpen(false);
      setCloseDialogForm(false);
    }
  }, [closeDialogForm]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "#b2ebf2",
        borderRadius: "10px",
        padding: "20px",
      }}
    >
      <TableContainer>
        <Table sx={{ minWidth: 650, backgroundColor: "white" }}>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Type of Transaction</TableCell>
              <TableCell>Concept</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allTransactionsDetails &&
              allTransactionsDetails.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>
                    {transaction.date
                      ? format(new Date(transaction.date), "dd-MM-yyy")
                      : null}
                  </TableCell>
                  <TableCell>{transaction.type}</TableCell>
                  <TableCell>{transaction.concept}</TableCell>
                  <TableCell>
                    {allCategories &&
                      allCategories.map((c) =>
                        c.id === transaction.categoryId ? c.name : null
                      )}
                  </TableCell>
                  <TableCell>${transaction.amount}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleOpen(transaction)}>
                      <EditIcon />
                    </IconButton>
                    <Dialog open={open} onClose={handleClose}>
                      <DialogTitle>Edit transaction</DialogTitle>
                      <DialogContent>
                        <EditTransactionForm
                          transactionToEdit={transactionToEdit}
                          setCloseDialogForm={setCloseDialogForm}
                          getAllTransactionsInfo={getAllTransactionsInfo}
                          allCategories={allCategories}
                        />
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() => handleOpenDeleteModal(transaction)}
                    >
                      <DeleteIcon />{" "}
                    </IconButton>
                    <DeleteTransactionModal
                      openModalDelete={openModalDelete}
                      transaction={transaction}
                      handleCloseDeleteModal={handleCloseDeleteModal}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ListOfTransactionsCard;
