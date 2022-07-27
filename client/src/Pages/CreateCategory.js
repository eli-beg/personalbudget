import React from "react";
import { Box } from "@mui/system";
import CreateCategoryForm from "../Components/Categories/CreateCategoryForm";
import { Typography } from "@mui/material";

const CreateCategory = () => {
  const drawerWidth = 240;
  return (
    <Box
      sx={{
        marginTop: "60px",
        width: { xs: "100%", md: `calc(100% - ${drawerWidth}px)` },
        height: "100vh",
        backgroundColor: "#e0f2f1",
        borderRadius: "10px",
      }}
    >
      <Typography variant="h6" color="text.primary">
        Create Category
      </Typography>
      <CreateCategoryForm />
    </Box>
  );
};

export default CreateCategory;
