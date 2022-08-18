import React, { useState } from "react";
import { Menu, MenuItem } from "@mui/material";
import UserDeleteModal from "./UserDeleteModal";
import UserLogoutModal from "./UserLogoutModal";

const MenuUserSettings = ({ open, anchorEl, handleCloseMenu }) => {
  const [openLogoutModal, setOpenLogoutModal] = useState(false);
  const [openDeleteUser, setOpenDeleteUser] = useState(false);

  const handleOpenLogoutModal = () => {
    setOpenLogoutModal(true);
  };

  const handleOpenDeleteUser = () => {
    setOpenDeleteUser(true);
    handleCloseMenu();
  };

  return (
    <>
      <Menu
        open={open}
        anchorEl={anchorEl}
        onClose={handleCloseMenu}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
      >
        <MenuItem onClick={handleOpenLogoutModal}>Logout</MenuItem>
        <MenuItem onClick={handleOpenDeleteUser}>Delete user</MenuItem>
      </Menu>
      <UserLogoutModal
        openLogoutModal={openLogoutModal}
        setOpenLogoutModal={setOpenLogoutModal}
        handleCloseMenu={handleCloseMenu}
      />
      <UserDeleteModal
        openDeleteUser={openDeleteUser}
        handleCloseMenu={handleCloseMenu}
        handleOpenDeleteUser={handleOpenDeleteUser}
        setOpenDeleteUser={setOpenDeleteUser}
      />
    </>
  );
};

export default MenuUserSettings;
