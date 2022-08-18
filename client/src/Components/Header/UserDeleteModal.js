import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from "@mui/material";
import { deleteApiUser } from "../../Api/User";
import useUserStorage from "../../hooks/useUserStorage";
import { Link } from "react-router-dom";

const UserDeleteModal = ({ setOpenDeleteUser, openDeleteUser }) => {
  const [userRemoved, setUserRemoved] = useState(false);
  const { user } = useUserStorage();
  const { deleteUserInStorage } = useUserStorage();

  const userId = {
    id: user && user.id,
  };

  const handleCloseDeleteModal = () => {
    setOpenDeleteUser(false);
  };

  const handleDeleteUser = async (userId) => {
    const { data } = await deleteApiUser(userId);
    if (data) {
      setOpenDeleteUser(false);
      setUserRemoved(true);
      deleteUserInStorage();
    }
  };

  return (
    <>
      <Dialog open={openDeleteUser}>
        <DialogContent>
          <Typography>Are you sure you want to delete your user?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleDeleteUser(userId)}>Yes</Button>
          <Button onClick={handleCloseDeleteModal}>No</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={userRemoved}>
        <DialogContent>
          <Typography>Your user has been removed!</Typography>
        </DialogContent>
        <DialogActions>
          <Button component={Link} to="/welcome-screen">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default UserDeleteModal;
