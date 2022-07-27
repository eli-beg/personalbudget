import React, { useState } from "react";
import {
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
import DialogDeleteCategory from "./DeleteCategory/DialogDeleteCategory";
import DialogEditCategory from "./EditCategory/DialogEditCategory";

const ListOfCategoriesCard = ({
  counterOfTransactionsByCategory,
  getAllCategories,
}) => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [categorySelected, setCategorySelected] = useState(null);

  const handleOpenEditModal = (category) => {
    setOpenEditModal(true);
    setCategorySelected(category);
  };

  const handleOpenDeleteModal = (category) => {
    setOpenDeleteModal(true);
    setCategorySelected(category);
  };

  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 650, backgroundColor: "white" }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Number of Transactions</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {counterOfTransactionsByCategory &&
              counterOfTransactionsByCategory.map((category) => (
                <TableRow>
                  <TableCell>{category.name}</TableCell>
                  <TableCell>{category.count}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleOpenEditModal(category)}>
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleOpenDeleteModal(category)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <DialogEditCategory
        openEditModal={openEditModal}
        categorySelected={categorySelected}
        setOpenEditModal={setOpenEditModal}
        getAllCategories={getAllCategories}
      />
      <DialogDeleteCategory
        openDeleteModal={openDeleteModal}
        setOpenDeleteModal={setOpenDeleteModal}
        categorySelected={categorySelected}
        getAllCategories={getAllCategories}
      />
    </>
  );
};

export default ListOfCategoriesCard;
