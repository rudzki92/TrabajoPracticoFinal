import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "./assets/css/Home.css"; 
const Home = () => {
  return (
    <div id="wrapper">
      <Sidebar />

      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar />

          <div className="container-fluid home-container">
            <div className="home-card">
              <h1 className="home-title">¡Bienvenido a nuestra página!</h1>
              <p className="home-text">
                Descubre nuestra selección de productos tecnológicos y de computación al mejor precio. Desde las últimas
                innovaciones en hardware hasta accesorios imprescindibles, tenemos todo lo que necesitas para estar a la
                vanguardia. ¡Explora, elige y lleva tu tecnología al siguiente nivel!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
