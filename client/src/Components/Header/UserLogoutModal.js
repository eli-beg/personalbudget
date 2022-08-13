import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import useUserStorage from "../../hooks/useUserStorage";

const UserLogoutModal = ({
  openLogoutModal,
  setOpenLogoutModal,
  handleCloseMenu,
}) => {
  const navigate = useNavigate();
  const { deleteUserInStorage } = useUserStorage();

  const handleLogoutUser = () => {
    deleteUserInStorage();
    navigate(`/welcome-screen`);
  };

  const handleCloseLogoutModal = () => {
    setOpenLogoutModal(false);
    handleCloseMenu();
  };
  return (
    <>
      <Dialog open={openLogoutModal}>
        <DialogContent>
          <Typography>Are you sure you want to Logout?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLogoutUser}>Yes</Button>
          <Button onClick={handleCloseLogoutModal}>No</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default UserLogoutModal;
