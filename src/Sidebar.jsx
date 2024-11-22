import React from "react";

const Sidebar = () => {
  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">Ecommerce</div>
      </a>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item">
        <a className="nav-link" href="/home">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Home</span>
        </a>
      </li>

      <hr className="sidebar-divider" />

      <li className="nav-item">
        <a className="nav-link" href="/productos">
          <i className="fas fa-fw fa-cog"></i>
          <span>Productos</span>
        </a>
      </li>

      <hr className="sidebar-divider" />
    </ul>
  );
};

export default Sidebar;
