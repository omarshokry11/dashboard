import React from "react";
import Sidebar from "./Layout/components/sidebar/sidebar.js";
import TopNavbar from "./Layout/components/topnavbar/topnavbar.js";
import Navbar from "./Layout/components/navbar/navbar.js";

import "./Layout/style/Main.scss";

export default function App() {

  return (
      <div className="app">
          <div id="topNavbar">
            <TopNavbar />
          </div>
          <div id="page">
              <div id="sidebar">
                  <Sidebar />
              </div>
              <div id="home">
                  <div id="navbar">
                      <Navbar />
                  </div>
              </div>
          </div>
      </div>
  );
}