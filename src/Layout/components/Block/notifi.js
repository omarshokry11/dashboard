import React from "react";

import "./style/notifi.scss";

export default function Notifications () {
    return (
        <div className="notification">
            <div className="new-notifications">
                <h4>4 New</h4>
                <p>Notifications</p>
            </div>
            <div className="items">
                <div className="item">
                    <span className="icon link"><i className="fas fa-link"> </i></span>
                    <div className="title">
                        <h6>Luanch Admin</h6>
                        <span>Just see the my new admin!</span>
                        <span>9:30 AM!</span>
                    </div>
                </div>
                <div className="item">
                    <span className="icon calendar"><i className="fas fa-calendar"> </i></span>
                    <div className="title">
                        <h6>Event today</h6>
                        <span>Just a reminder that you have ev...</span>
                        <span>9:10 AM!</span>
                    </div>
                </div>
                <div className="item">
                    <span className="icon cog"><i className="fas fa-cog"> </i></span>
                    <div className="title">
                        <h6>Settings</h6>
                        <span>You can customize this template...</span>
                        <span>9:08 AM!</span>
                    </div>
                </div>
                <div className="item">
                    <span className="icon user"><i className="fas fa-user"> </i></span>
                    <div className="title">
                        <h6>Pavan kumar</h6>
                        <span>Just see the my new admin!</span>
                        <span>9:02 AM!</span>
                    </div>
                </div>
                <div className="check">
                   <h5>Check all notification <i className="fas fa-angle-right"> </i></h5>
                </div>
            </div>
        </div>
    )
}