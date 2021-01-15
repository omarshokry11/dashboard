import React, {useEffect} from "react";

import "./style/notificationBlock.scss";

export default function NotificationBlock({notification}){
    const notifi = document.getElementById("notification");
    useEffect(() => {
        notifi?.addEventListener("click", (e) => {
            e.stopPropagation();
        })
    }, [notification, notifi]);

    return(
        <div className={notification ? "notification dropdown-show" : "dropdown-hide"} id="notification">
            <div className="arrow"> </div>
            <div className="notification-title">
                <h5>4 New</h5>
                <p>notifications</p>
            </div>
            <div className="notification-item">
                <div className="item">
                    <div className="icon-item">
                        <div className="icon" style={{ background: '#f62d51'}}><i className="fas fa-link"> </i></div>
                    </div>
                    <div className="item-details">
                        <h6>Luanch Admin</h6>
                        <p>Just see the my admin!</p>
                        <span>9:30 AM</span>
                    </div>
                </div>
                <div className="item">
                    <div className="icon-item">
                        <div className="icon" style={{ background: '#36bea6'}}><i className="fas fa-calendar"> </i></div>
                    </div>
                    <div className="item-details">
                        <h6>Event today</h6>
                        <p>Just a reminder that you have ev...</p>
                        <span>9:10 AM</span>
                    </div>
                </div>
                <div className="item">
                    <div className="icon-item">
                        <div className="icon" style={{ background: '#009efb'}}><i className="fas fa-cog"> </i></div>
                    </div>
                    <div className="item-details">
                        <h6>Settings</h6>
                        <p>You can customize this template ...</p>
                        <span>9:08 AM</span>
                    </div>
                </div>
                <div className="item">
                    <div className="icon-item">
                        <div className="icon" style={{ background: '#7460ee'}}><i className="far fa-user"> </i></div>
                    </div>
                    <div className="item-details">
                        <h6>Pavan Kumar</h6>
                        <p>Just see the my admin!</p>
                        <span>9:02 AM</span>
                    </div>
                </div>
            </div>
            <div className="notification-footer">
                <p>Check all notifications <i className="fas fa-angle-right"> </i></p>
            </div>
        </div>
    )
}