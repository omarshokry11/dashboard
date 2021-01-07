import React from "react";
import { Image } from "react-bootstrap";
import "./style/profile.scss";

export default function Profile(){
    return(
        <div className="profile" id="settings">
            <div className="user-profile">
                <div className="img">
                    <Image src="/images/users/1.jpg"/>
                </div>
                <div className="name-profile">
                    <p className="name">Steave Jobs</p>
                    <p className="email">varun@gmail.com</p>
                </div>
            </div>
            <div className="details-profile">
                <p><i className="far fa-user"> </i> My Profile</p>
                <p><i className="fas fa-wallet"> </i> My Balance</p>
                <p><i className="far fa-envelope"> </i> Inbox</p>
            </div>
            <div className="main-profile">
                <div><p><i className="fas fa-cog"> </i> Account Setting</p></div>
                <div><p><i className="fas fa-sign-out-alt"> </i> Logout</p></div>
                <div><p className="view">View Profile</p></div>
            </div>
        </div>
    )
}