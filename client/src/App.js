import React from "react";

import Home from "./Pages/Home";
import WelcomeScreen from "./Pages/WelcomeScreen";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./themeConfig";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
