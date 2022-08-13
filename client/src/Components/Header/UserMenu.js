import React from "react";
import { Avatar, Grid, IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import useUserStorage from "../../hooks/useUserStorage";

const UserMenu = () => {
  const { user } = useUserStorage();

  return (
    <>
      <Grid container justifyContent="space-around">
        <Grid item>
          <Avatar>{user && user.userFirstname[0].toUpperCase()}</Avatar>
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
