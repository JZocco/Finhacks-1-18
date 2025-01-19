import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Investment from "./pages/Investment";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/investment" element={<Investment />} />
      <Route path="/log-out" element={<Home />} /> 
    </Routes>
  );
};

export default App;
