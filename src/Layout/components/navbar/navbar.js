import React from 'react';

import "./style/navbar.scss";

export default function Navbar() {
    return(
        <div className="navbar-home">
            <div className="main-navbar">
                <h4 className="main-title">Dashboard 1</h4>
            </div>
            <div className="inner-navbar">
                <span className="link"><a href="/">Home</a></span>
                <span className="arrow"><i className="fas fa-chevron-right"> </i></span>
                <span className="span-title">Dashboard 1</span>
                <button className="button"><i className="fas fa-plus-circle"> </i> Create New</button>
            </div>
        </div>
    )
}