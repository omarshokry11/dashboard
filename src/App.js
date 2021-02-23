import React from "react";
import SideBar from "./Layout/components/sidebar.js";
import Navbar from "./Layout/components/navbar.js";
import Home from "./Layout/components/home.js";
import Products from "./Layout/components/Block/products";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
                  <BrowserRouter>
                      <Switch>
                          <Route path="/" exact component={Home} />
                          <Route path="/product" exact component={Products} />
                      </Switch>
                  </BrowserRouter>
              </div>
          </div>
      </div>
  );
}