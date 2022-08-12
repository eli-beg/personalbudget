import React, { useCallback, useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import CreateTransactionForm from "../Components/Transactions/CreateTransactionForm";
import useIsMountedRef from "../hooks/useIsMountedRef";
import { getCategories } from "../Api/Categories";

const CreateTransaction = () => {
  const [allCategories, setAllCategories] = useState(null);
  const drawerWidth = 240;

  const isMounted = useIsMountedRef();

  const getAllCategories = useCallback(async () => {
    try {
      const { data } = await getCategories();

      if (isMounted) {
        setAllCategories(data.getCategories);
      }
    } catch (error) {
      console.error(error);
    }
  }, [isMounted]);

  useEffect(() => {
    getAllCategories();
  }, [getAllCategories]);

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
      <CreateTransactionForm
        allCategories={allCategories}
        getAllCategories={getAllCategories}
      />
    </Box>
  );
};

export default CreateTransaction;
