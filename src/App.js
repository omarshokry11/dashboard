import React from "react";
import SideBar from "./Layout/components/sidebar.js";
import Navbar from "./Layout/components/navbar.js";

import "./Layout/style/Main.scss";

export default function App() {

  return (
      <div className="app">
          <div className="sidebar">
              <SideBar />
          </div>
          <div className="page">
              <div className="page-navbar">
                  <Navbar />
              </div>
              <div className="home">
                  Home
              </div>
          </div>
      </div>
  );
}