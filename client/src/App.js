import React from "react";
import Home from "./Pages/Home";
import WelcomeScreen from "./Pages/WelcomeScreen";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./themeConfig";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Dashboard from "./Components/Dashboard/Dashboard";
import ExpensesDetails from "./Components/Transactions/ExpensesDetails";
import IncomesDetails from "./Components/Transactions/IncomesDetails";
import AllTransactionsDetails from "./Components/Transactions/AllTransactionsDetails";
import CreateTransaction from "./Components/Transactions/CreateTransaction";
import AllCategories from "./Components/Categories/AllCategories";
import CreateCategory from "./Components/Categories/CreateCategory";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/welcomescreen" element={<WelcomeScreen />} />
          <Route path="/" element={<Home />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="expenses-details" element={<ExpensesDetails />} />
            <Route path="incomes-details" element={<IncomesDetails />} />
            <Route
              path="all-transactions-details"
              element={<AllTransactionsDetails />}
            />
            <Route path="create-transaction" element={<CreateTransaction />} />
            <Route path="all-categories" element={<AllCategories />} />
            <Route path="create-category" element={<CreateCategory />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
