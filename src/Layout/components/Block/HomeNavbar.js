import React from 'react';
import { Link } from 'react-router-dom';
import './style/HomeNavebar.scss';


export default function HomeNavbar(){
    return(
        <div className="home-navbar">
            <div className="item-logo">
                <h5>Dashboard 4</h5>
            </div>
            <div className="item-navbar-box">
                <a href="/">
                    Home
                    <i className="fas fa-angle-right"> </i>
                </a>
                <span>Dashboard 4</span>
                <Link to="/product" className="link"><i className="fas fa-plus-circle"> </i>Create New</Link>
            </div>
        </div>
    )
}