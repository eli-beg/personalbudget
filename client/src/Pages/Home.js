import React, { useCallback, useEffect, useState, useRef } from "react";
import { Box } from "@mui/material";
import Dashboard from "../Components/Dashboard/Dashboard";
import HeaderBar from "../Components/Header/HeaderBar";
import SideBar from "../Components/Sidebar/SideBar";
import { allTransactions } from "../Api/Transactions";
import useIsMountedRef from "../hooks/useIsMountedRef";
import { getCategories } from "../Api/Categories";
import formatISO from "date-fns/formatISO";

const Home = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [allTransactionsInfoBalance, setAllTransactionsInfoBalance] =
    useState(null);
  const [allTransactionsDetails, setAllTransactionsDetails] = useState(null);
  const [allCategories, setAllCategories] = useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isMounted = useIsMountedRef();

  const getAllTransactionsInfo = useCallback(async () => {
    try {
      const { data } = await allTransactions();

      const allTransactionsList = data.allTransactions;

      allTransactionsList &&
        allTransactionsList.map(
          (t) =>
            (t.date = formatISO(new Date(t.date), {
              representation: "complete",
            }))
        );
      allTransactionsList &&
        allTransactionsList.sort((a, b) => a.date < b.date);

      if (isMounted) {
        setAllTransactionsInfoBalance(data);
        setAllTransactionsDetails(allTransactionsList);
      }
    } catch (error) {
      console.error(error);
    }
  }, [isMounted]);

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
    getAllTransactionsInfo();
    getAllCategories();
  }, [getAllTransactionsInfo, getAllCategories]);

  return (
    <Box sx={{ display: "flex" }}>
      <HeaderBar handleDrawerToggle={handleDrawerToggle} />
      <SideBar
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
      <Dashboard
        allTransactionsInfoBalance={allTransactionsInfoBalance}
        allTransactionsDetails={allTransactionsDetails}
        allCategories={allCategories}
        getAllTransactionsInfo={getAllTransactionsInfo}
        setAllTransactionsDetails={setAllTransactionsDetails}
      />
    </Box>
  );
};

export default Home;
