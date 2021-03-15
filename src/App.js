import React from "react";
import Sidebar from "./Layout/components/Sidebar.js";
import Navbar from "./Layout/components/Navbar.js";
import Home from "./Layout/components/Home.js";
import Products from "./Layout/components/Block/Products.js";
import TableProductBlock from "./Layout/components/Block/TableProductBlock";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import "./Layout/style/Main.scss";

export default function App() {

  return (
      <div className="app">
          <div className="sidebar">
              <Sidebar />
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
                          <Route path="/tableProduct" exact component={TableProductBlock} />
                      </Switch>
                  </BrowserRouter>
              </div>
          </div>
      </div>
  );
}