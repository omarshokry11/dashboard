import React, {useEffect} from "react";

import "./style/profileBlock.scss";
import {Image} from "react-bootstrap";

export default function ProfileBlock({profile}){
    const profiles = document.getElementById("profile");
    useEffect(() => {
        profiles?.addEventListener("click", (e) => {
            e.stopPropagation();
        })
    }, [profile, profiles]);

    return(
        <div className={profile ? "profile-block dropdown-show" : "dropdown-hide"} id="profile">
            <div className="arrow"> </div>
            <div className="profile-title">
               <div className="img">
                   <Image src="/1.jpg" />
               </div>
                <div className="profile-name">
                    <h5 className="name">Steave Jobs</h5>
                    <span className="email">varun@gmail.com</span>
                </div>
            </div>
            <div className="profile-item">
                <div className="item">
                   <p><i className="far fa-user"> </i> My Profile</p>
                </div>
                <div className="item">
                    <p><i className="fas fa-ticket-alt"> </i> My Balance</p>
                </div>
                <div className="item">
                    <p><i className="far fa-envelope"> </i> Inbox</p>
                </div>
                <span className="line"> </span>
                <div className="item">
                    <p><i className="fas fa-cog"> </i> Account Setting</p>
                </div>
                <span className="line"> </span>
                <div className="item">
                    <p><i className="fas fa-sign-out-alt"> </i> Logout</p>
                </div>
                <span className="line"> </span>
                <div className="item-button">
                    <button>View Profile</button>
                </div>
            </div>
        </div>
    )
}