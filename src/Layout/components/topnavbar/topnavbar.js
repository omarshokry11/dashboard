import React from "react";
import { Image } from "react-bootstrap";

import "./style/topnavbar.scss";

export default function TopNavbar() {
    return(
        <div className="navbar">
            <div className="logo">
                <Image src="/images/logo/logo.png" />
            </div>
            <input type="text" placeholder="Search & Enter" />
            <span className="exit"><i className="fas fa-times"> </i></span>
            <div className="notify">
                <span className="i"><i className="far fa-envelope"> </i></span>
                <span className="i"><i className="far fa-edit"> </i></span>
                <span className="i"><i className="fas fa-search"> </i></span>
            </div>
            <div className="profile">
                <div className="icon"><i className="fas fa-layer-group"> </i></div>
                <div className="img"><Image src="/images/users/1.jpg" /></div>
            </div>
        </div>
    )
}