import React from "react";
import { TableCell, TableSortLabel } from "@mui/material";

const HeadCellsCategories = ({ handleOrderCategories, order }) => {
  const headCells = [
    {
      id: "name",
      sortLabel: true,
      label: "Name",
    },
    {
      id: "count",
      sortLabel: true,
      label: "Number of Transactions",
    },

    {
      id: "edit",
      sortLabel: false,
      label: "Edit",
    },
    {
      id: "delete",
      sortLabel: false,
      label: "Delete",
    },
  ];
  return (
    <>
      {headCells &&
        headCells.map((headCell, index) =>
          headCell.sortLabel ? (
            <TableCell sx={{ fontWeight: "bold" }}>
              <TableSortLabel
                key={headCell.id}
                direction={order}
                onClick={() => handleOrderCategories(headCell.id)}
              >
                {headCell.label}
              </TableSortLabel>
            </TableCell>
          ) : (
            <TableCell sx={{ fontWeight: "bold" }}>{headCell.label}</TableCell>
          )
        )}
    </>
  );
};

export default HeadCellsCategories;
