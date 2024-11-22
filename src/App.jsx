import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Registro from "./Registro";
import Home from "./Home";
import Productos from "./Productos";
import DetalleProducto from "./DetalleProducto";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/detalle/:SKU" element={<DetalleProducto />} />
      </Routes>
    </Router>
  );
};

export default App;
