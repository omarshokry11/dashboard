import React from "react";
import Sidebar from "./Layout/components/sidebar/sidebar.js";
import TopNavbar from "./Layout/components/topnavbar/topnavbar.js";

import "./Layout/style/Main.scss";

export default function App() {

  return (
      <div className="app">
          <div id="sidebar">
              <Sidebar />
          </div>
          <div id="topNavbar">
            <TopNavbar />
          </div>
      </div>
  );
}