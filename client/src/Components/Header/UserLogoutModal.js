import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { destroyUserData } from "../../App/auth/authSlice";

const UserLogoutModal = ({
  openLogoutModal,
  setOpenLogoutModal,
  handleCloseMenu,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleLogoutUser = () => {
    
   dispatch(destroyUserData())
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
