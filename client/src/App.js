import React from "react";

import Home from "./Pages/Home";
import WelcomeScreen from "./Pages/WelcomeScreen";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./themeConfig";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
