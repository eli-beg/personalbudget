import React, { useState } from "react";
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Grid,
} from "@mui/material";

import { Link } from "react-router-dom";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import pig from "../../images/pig.jpg";

const MenuCard = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const drawerWidth = 240;

  return (
    <Box>
      <Grid
        container
        direction="column"
        alignItems="flex-start"
        sx={{ width: drawerWidth }}
      >
        <Grid
          container
          item
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            width: "100%",
            height: "120px",
          }}
        >
          <Grid container item alignItems="center">
            <Grid
              item
              sx={{
                backgroundImage: `url(${pig})`,
                backgroundSize: "cover",
                width: "120px",
                height: "130px",
              }}
            ></Grid>
            <Grid item>
              <Typography>pBudgetApp</Typography>
            </Grid>
            <Grid item>
              <Divider variant="middle" />
            </Grid>
          </Grid>
        </Grid>
        <Grid container item>
          <List sx={{ width: "100%", padding: " 0px" }}>
            <ListItem nested display="flex">
              <Grid container display="flex" direction="column">
                <Grid item display="flex" direction="column">
                  <Link
                    to="/dashboard"
                    style={{ textDecoration: "none", width: "100%" }}
                  >
                    <ListItemButton>
                      <ListItemText sx={{ marginLeft: "25px" }}>
                        Dashboard
                      </ListItemText>
                    </ListItemButton>
                  </Link>
                </Grid>
                <Grid item>
                  <Divider variant="middle" />
                </Grid>
                <Grid item>
                  <ListItemButton onClick={() => setOpen(!open)}>
                    <KeyboardArrowDown
                      sx={{ transform: open ? "initial" : "rotate(-90deg)" }}
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
                        <Link to="/all-transactions-details">
                          <ListItemButton>
                            <Typography>All Transactions</Typography>
                          </ListItemButton>
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link to="/create-transaction">
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
                      sx={{ transform: open2 ? "initial" : "rotate(-90deg)" }}
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default MenuCard;
