import React, { useState } from "react";
import {
  IconButton,
  Menu,
  MenuItem,
  TableCell,
  TableSortLabel,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const HeadCell = ({
  order,
  handleOrderTransactions,
  allCategories,
  filterMenuItemOptions,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickItem = (e) => {
    const value = e.currentTarget.id;
    filterMenuItemOptions(value);
    handleClose();
  };

  const handleClick = (index, e) => {
    setAnchorEl({ [index]: e.currentTarget });
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const typeObject = [
    { id: "income", name: "Incomes" },
    { id: "expense", name: "Expenses" },
  ];

  const headCells = [
    {
      id: "date",
      sortLabel: true,
      filterLabel: false,
      label: "Date",
    },
    {
      id: "type",
      sortLabel: false,
      filterLabel: true,
      options: typeObject,
      label: "Type of Transaction",
    },

    {
      id: "concept",
      sortLabel: false,
      filterLabel: false,
      label: "Concept",
    },
    {
      id: "category",
      sortLabel: false,
      filterLabel: true,
      options: allCategories,
      label: "Category",
    },

    {
      id: "amount",
      sortLabel: true,
      filterLabel: false,
      label: "Amount",
    },
    {
      id: "edit",
      sortLabel: false,
      filterLabel: false,
      label: "Edit",
    },
    {
      id: "delete",
      sortLabel: false,
      filterLabel: false,
      label: "Delete",
    },
  ];

  return (
    <>
      {headCells.map((headCell, index) =>
        headCell.sortLabel ? (
          <TableCell sx={{ fontWeight: "bold" }}>
            <TableSortLabel
              key={headCell.id}
              direction={order}
              onClick={() => handleOrderTransactions(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ) : headCell.filterLabel ? (
          <>
            <TableCell sx={{ fontWeight: "bold" }}>
              {headCell.label}

              <IconButton key={index} onClick={(e) => handleClick(index, e)}>
                <MoreVertIcon />
              </IconButton>
              <Menu
                open={Boolean(anchorEl && anchorEl[index])}
                anchorEl={anchorEl && anchorEl[index]}
                onClose={handleClose}
              >
                {headCell.options &&
                  headCell.options.map((option, menuindex) => (
                    <MenuItem
                      key={menuindex}
                      id={option.id}
                      onClick={handleClickItem}
                    >
                      {option.name}
                    </MenuItem>
                  ))}
                <MenuItem id="all" onClick={handleClickItem}>
                  All
                </MenuItem>
              </Menu>
            </TableCell>
          </>
        ) : (
          <TableCell sx={{ fontWeight: "bold" }}>{headCell.label}</TableCell>
        )
      )}
    </>
  );
};

export default HeadCell;
