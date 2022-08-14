import React from "react";
import { Box } from "@mui/system";
import CreateCategoryForm from "../Components/Categories/CreateCategory/CreateCategoryForm";
import { Grid, Typography } from "@mui/material";

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
      <Grid container justifyContent="center">
        <Grid
          container
          direction="column"
          spacing={2}
          marginTop="55px"
          marginLeft="2px"
          padding="20px"
          xs={11}
          lg={5}
          sx={{
            borderRadius: "7px",
            borderStyle: "solid",
            borderColor: "#e2e2e0",
            backgroundColor: "whitesmoke",
          }}
        >
          <Grid container item justifyContent="center">
            <Typography variant="h6" color="text.primary">
              Create Category
            </Typography>
          </Grid>
          <Grid container item justifyContent="center">
            <CreateCategoryForm />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CreateCategory;
