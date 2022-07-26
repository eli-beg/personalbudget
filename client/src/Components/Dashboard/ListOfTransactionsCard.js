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
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import EditTransactionForm from "./EditTransactionForm";
import format from "date-fns/format";
import DeleteTransactionModal from "./DeleteTransactionModal";
import HeadCell from "./HeadCell";

const ListOfTransactionsCard = ({
  transactionsDetails,
  allCategories,
  getAllTransactionsInfo,
}) => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [closeDialogForm, setCloseDialogForm] = useState(false);
  const [transactionsByDate, setTransactionsByDate] = useState(null);
  const [transactionSelected, setTransactionSelected] = useState(null);
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("desc");
  const [openModalCategoryFilter, setOpenModalCategoryFilter] = useState(false);

  useEffect(() => {
    if (transactionsDetails) {
      setTransactionsByDate(transactionsDetails);
    }
  }, [transactionsDetails, allCategories]);

  useEffect(() => {
    handleOrderTransactions(sortField);
  }, [sortField]);

  const filterMenuItemOptions = (value) => {
    if (value === "expense" || value === "income") {
      const transactionsFiltered = transactionsDetails.filter(
        (transaction) => transaction.type === value
      );
      setTransactionsByDate(transactionsFiltered);
    } else {
      const transactionsFiltered = transactionsDetails.filter(
        (transaction) => transaction.categoryId === value
      );
      if (transactionsFiltered.length >= 1) {
        setTransactionsByDate(transactionsFiltered);
      }
      if (transactionsFiltered.length === 0) {
        setOpenModalCategoryFilter(true);
      }
      if (transactionsFiltered.length === 0 && value === "all") {
        setOpenModalCategoryFilter(false);
        setTransactionsByDate(transactionsDetails);
      }
    }
  };

  const handleSorting = (sortField, order) => {
    if (sortField === "date" && order === "asc") {
      const sorted = transactionsByDate.sort(
        (a, b) => a[sortField] > b[sortField]
      );
      setTransactionsByDate(sorted);
    }
    if (sortField === "date" && order === "desc") {
      const sorted = transactionsByDate.sort(
        (a, b) => a[sortField] < b[sortField]
      );
      setTransactionsByDate(sorted);
    }
    if (sortField === "amount" && order === "asc") {
      const sorted = transactionsByDate.sort(
        (a, b) => a[sortField] - b[sortField]
      );
      setTransactionsByDate(sorted);
    }
    if (sortField === "amount" && order === "desc") {
      const sorted = transactionsByDate.sort(
        (a, b) => b[sortField] - a[sortField]
      );
      setTransactionsByDate(sorted);
    }
  };

  const handleOrderTransactions = (id) => {
    setSortField(id); // date
    const sortOrder = id === sortField && order === "asc" ? "desc" : "asc";
    setOrder(sortOrder);
    handleSorting(sortField, order);
  };

  const handleOpenEditModal = (transaction) => {
    setTransactionSelected(transaction);
    setOpenEditModal(true);
  };

  const handleCloseEditModal = () => {
    setOpenEditModal(false);
    getAllTransactionsInfo();
  };

  const handleOpenDeleteModal = () => {
    setOpenModalDelete(true);
  };

  const handleCloseDeleteModal = () => {
    setOpenModalDelete(false);
    getAllTransactionsInfo();
  };

  const handleCloseCategoryFilter = () => {
    setOpenModalCategoryFilter(false);
  };

  useEffect(() => {
    if (closeDialogForm) {
      setOpenEditModal(false);
      setCloseDialogForm(false);
    }
  }, [closeDialogForm]);

  return (
    <>
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
                <HeadCell
                  order={order}
                  handleOrderTransactions={handleOrderTransactions}
                  allCategories={allCategories}
                  filterMenuItemOptions={filterMenuItemOptions}
                  openModalCategoryFilter={openModalCategoryFilter}
                  setOpenModalCategoryFilter={setOpenModalCategoryFilter}
                />
              </TableRow>
            </TableHead>

            <TableBody>
              {transactionsByDate &&
                transactionsByDate.map((transaction) => (
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
                      <IconButton
                        onClick={() => handleOpenEditModal(transaction)}
                      >
                        <EditIcon />
                      </IconButton>
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
      <Dialog
        open={openModalCategoryFilter}
        onClose={handleCloseCategoryFilter}
      >
        <Typography>There are not transactions with this category</Typography>
      </Dialog>
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
    </>
  );
};

export default ListOfTransactionsCard;
