import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Investment from "./pages/Investment";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/investment" element={<Investment />} />
    </Routes>
  );
};

export default App;
