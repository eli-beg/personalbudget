import React, { useEffect, useState } from "react";
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
import HeadCellsCategories from "./HeadCellsCategories";

const ListOfCategoriesCard = ({
  counterOfTransactionsByCategory,
  getAllCategories,
}) => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [categorySelected, setCategorySelected] = useState(null);
  const [sortField, setSortField] = useState(null);
  const [order, setOrder] = useState("desc");
  const [categoriesSorted, setCategoriesSorted] = useState(null);

  useEffect(() => {
    if (counterOfTransactionsByCategory) {
      setCategoriesSorted(counterOfTransactionsByCategory);
    }
  }, [counterOfTransactionsByCategory]);

  useEffect(() => {
    handleOrderCategories(sortField);
  }, [sortField]);

  const handleOpenEditModal = (category) => {
    setOpenEditModal(true);
    setCategorySelected(category);
  };

  const handleOpenDeleteModal = (category) => {
    setOpenDeleteModal(true);
    setCategorySelected(category);
  };

  const handleOrderCategories = (id) => {
    setSortField(id);
    const sortOrder = id === sortField && order === "asc" ? "desc" : "asc";
    setOrder(sortOrder);
    handleSorting(sortField, order);
  };

  const handleSorting = (sortField, order) => {
    if (sortField === "name" && order === "asc") {
      const sorted = categoriesSorted.sort(
        (a, b) => a[sortField] > b[sortField]
      );
      setCategoriesSorted(sorted);
    }
    if (sortField === "name" && order === "desc") {
      const sorted = categoriesSorted.sort(
        (a, b) => a[sortField] < b[sortField]
      );
      setCategoriesSorted(sorted);
    }
    if (sortField === "count" && order === "asc") {
      const sorted = categoriesSorted.sort(
        (a, b) => a[sortField] - b[sortField]
      );
      setCategoriesSorted(sorted);
    }
    if (sortField === "count" && order === "desc") {
      const sorted = categoriesSorted.sort(
        (a, b) => b[sortField] - a[sortField]
      );
      setCategoriesSorted(sorted);
    }
  };

  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 650, backgroundColor: "white" }}>
          <TableHead>
            <TableRow>
              <HeadCellsCategories
                handleOrderCategories={handleOrderCategories}
                order={order}
              />
            </TableRow>
          </TableHead>
          <TableBody>
            {categoriesSorted &&
              categoriesSorted.map((category) => (
                <TableRow>
                  <TableCell>{category.name}</TableCell>
                  <TableCell align="center">{category.count}</TableCell>
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
