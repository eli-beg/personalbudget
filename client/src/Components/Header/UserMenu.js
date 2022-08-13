import { Avatar, Grid, IconButton } from "@mui/material";
import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";

const UserMenu = () => {
  return (
    <>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Avatar>M</Avatar>
        </Grid>
        <Grid item>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
};

export default UserMenu;
