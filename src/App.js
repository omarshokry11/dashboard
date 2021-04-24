import React, {useEffect, useState} from "react";
import Sidebar from "./Layout/components/Sidebar.js";
import Navbar from "./Layout/components/Navbar.js";
import Home from "./Layout/components/Home.js";
import Products from "./Layout/components/Block/Products.js";
import TableProductBlock from "./Layout/components/Block/TableProductBlock";
import FullInformationProduct from "./Layout/components/Block/FullInformationProduct";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import "./Layout/style/Main.scss";
import Login from "./Layout/Login";

export default function App() {
    const [hideContent, setHideContent] = useState(false);
    useEffect(() => {
        setHideContent(window.location.pathname === "/login")
    }, [])

    return (
        <div className="app">
            {!hideContent ? <div className="sidebar">
                <Sidebar/>
            </div> : null}
            <div className="page">
                {!hideContent ? <div className="page-navbar">
                    <Navbar/>
                </div> : null}
                <div className="home">
                    <BrowserRouter>
                        <Switch>
                            <Route path="/" exact component={Home}/>
                            <Route path="/product" exact component={Products}/>
                            <Route path="/product/:slug" exact component={Products}/>
                            <Route path="/tableProduct" exact component={TableProductBlock}/>
                            <Route path="/products/:slug" exact component={FullInformationProduct}/>
                            <Route path="/login" exact component={Login}/>
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        </div>
    );
}