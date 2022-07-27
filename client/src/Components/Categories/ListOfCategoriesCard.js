import React from "react";
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

const ListOfCategoriesCard = ({ counterOfTransactionsByCategory }) => {
  return (
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
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListOfCategoriesCard;
