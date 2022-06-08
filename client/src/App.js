import React from "react";

import Home from "./Pages/Home";
import WelcomeScreen from "./Pages/WelcomeScreen";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomeScreen />} />
      <Route path="home" element={<Home />} />
    </Routes>
  );
}

export default App;
