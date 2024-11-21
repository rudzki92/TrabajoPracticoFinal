import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta para el Login */}
        <Route path="/" element={<Login />} />

        {/* Ruta para la Home */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
