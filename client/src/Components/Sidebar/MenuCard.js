import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Grid,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

const MenuCard = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <Box>
      <Typography sx={{ marginTop: "60px" }}>pBudgetApp</Typography>
      <Divider variant="middle" />
      <List>
        <ListItem nested display="flex">
          <Grid container display="flex" direction="column">
            <Grid item>
              <ListItem>
                <Link to="dashboard" style={{ textDecoration: "none" }}>
                  <ListItemButton>
                    <ListItemText>Dashboard</ListItemText>
                  </ListItemButton>
                </Link>
              </ListItem>
              <Divider variant="middle" />
            </Grid>
            <Grid item>
              <ListItemButton onClick={() => setOpen(!open)}>
                <KeyboardArrowDown
                  sx={{ transform: open ? "inital" : "rotate(-90deg)" }}
                />
                <ListItemText>Transactions</ListItemText>
              </ListItemButton>
            </Grid>

            {open && (
              <Grid item>
                <List>
                  <ListItem>
                    <Link to="/expenses-details">
                      <ListItemButton>
                        <Typography>Expenses</Typography>
                      </ListItemButton>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/incomes-details">
                      <ListItemButton>
                        <Typography>Incomes</Typography>
                      </ListItemButton>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link to="all-transactions-details">
                      <ListItemButton>
                        <Typography>All Transactions</Typography>
                      </ListItemButton>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link to="create-transaction">
                      <ListItemButton>
                        <Typography>Create Transaction</Typography>
                      </ListItemButton>
                    </Link>
                  </ListItem>
                </List>
              </Grid>
            )}
          </Grid>
        </ListItem>
        <ListItem nested display="flex">
          <Grid container display="flex" direction="column">
            <Grid item>
              <ListItemButton onClick={() => setOpen2(!open2)}>
                <KeyboardArrowDown
                  sx={{ transform: open2 ? "inital" : "rotate(-90deg)" }}
                />
                <ListItemText>Categories</ListItemText>
              </ListItemButton>
            </Grid>

            {open2 && (
              <Grid item>
                <List>
                  <ListItem>
                    <Link to="all-categories">
                      <ListItemButton>
                        <Typography>All Categories</Typography>
                      </ListItemButton>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link to="create-category">
                      <ListItemButton>
                        <Typography>Create Category</Typography>
                      </ListItemButton>
                    </Link>
                  </ListItem>
                </List>
              </Grid>
            )}
          </Grid>
        </ListItem>
      </List>
    </Box>
  );
};

export default MenuCard;
