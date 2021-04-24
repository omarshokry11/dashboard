import React from "react";
import "./style/HomeFeed.scss";


export default function HomeFeed(){
    let items=[
        {id: 1,classIcon: "icon", icon: "far fa-bell bell", classMessage: "item-message", titleMessage: "You have 4 pending tasks.", classNotification: "time-notification", titleNotification: "Just Now"},
        {id: 2,classIcon: "icon", icon: "fas fa-server server", classMessage: "item-message", titleMessage: "Server #1 overloaded.", classNotification: "time-notification", titleNotification: "2 Hours ago"},
        {id: 3,classIcon: "icon", icon: "fas fa-shopping-cart cart", classMessage: "item-message", titleMessage: " New order received.", classNotification: "time-notification", titleNotification: "31 May"},
        {id: 4,classIcon: "icon", icon: "fas fa-user user", classMessage: "item-message", titleMessage: " New user registered.", classNotification: "time-notification", titleNotification: "30 May"},
        {id: 5,classIcon: "icon", icon: "far fa-bell bell", classMessage: "item-message", titleMessage: " New Version just arrived.", classNotification: "time-notification", titleNotification: "27 May"},
        {id: 6,classIcon: "icon", icon: "far fa-bell bell", classMessage: "item-message", titleMessage: "You have 4 pending tasks.", classNotification: "time-notification", titleNotification: "Just Now"},
        {id: 7,classIcon: "icon", icon: "fas fa-user user", classMessage: "item-message", titleMessage: " New user registered.", classNotification: "time-notification", titleNotification: "30 May"},
    ];
    return(
        <div className="feed-box">
            <div className="feed-item">
                <div className="feed-title">
                    <h5>Feeds</h5>
                </div>
                <div className="feed-list">
                    <ul>
                        {items.map(
                            (item) => <li key={item.id}>
                                <p className={item.classIcon}><i className={item.icon}> </i></p>
                                <p className={item.classMessage}>{item.titleMessage}</p>
                                <p className={item.classNotification}>{item.titleNotification}</p>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}