import React from "react";
import Home from "./Pages/Home";
import WelcomeScreen from "./Pages/WelcomeScreen";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./themeConfig";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import ExpensesDetails from "./Pages/ExpensesDetails";
import IncomesDetails from "./Pages/IncomesDetails";
import AllTransactionsDetails from "./Pages/AllTransactionsDetails";
import CreateTransaction from "./Pages/CreateTransaction";
import AllCategories from "./Pages/AllCategories";
import CreateCategory from "./Pages/CreateCategory";
import Dashboard from "./Pages/Dashboard";
import RegisterScreen from "./Pages/RegisterScreen";
import Login from "./Components/WelcomeScreen/Login";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/welcome-screen" element={<WelcomeScreen />}>
            <Route path="/welcome-screen" element={<Login />} />
            <Route path="register" element={<RegisterScreen />} />
          </Route>

          <Route path="/" element={<Home />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/expenses-details" element={<ExpensesDetails />} />
            <Route path="/incomes-details" element={<IncomesDetails />} />
            <Route
              path="/all-transactions-details"
              element={<AllTransactionsDetails />}
            />
            <Route path="/create-transaction" element={<CreateTransaction />} />
            <Route path="all-categories" element={<AllCategories />} />
            <Route path="create-category" element={<CreateCategory />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
