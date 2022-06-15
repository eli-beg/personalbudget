import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React from "react";

const MenuCard = () => {
  return (
    <Box>
      <Typography sx={{ marginTop: "60px" }}>pBudgetApp</Typography>
      <Divider variant="middle" />

      <List>
        <ListItem>
          <ListItemButton>
            <ListItemText>Dashboard</ListItemText>
          </ListItemButton>
        </ListItem>
        <Divider variant="middle" />
        <ListItem>
          <ListItemButton>
            <ListItemText>Transactions</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemText>Categories</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default MenuCard;
