import React from "react";
import "./style/homeFeed.scss";


export default function HomeFeed(){
    return(
        <div className="feed-box">
            <div className="feed-item">
                <div className="feed-title">
                    <h5>Feeds</h5>
                </div>
                <div className="feed-list">
                    <ul>
                        <li>
                            <p className="icon"><i style={{backgroundColor: '#009efb'}} className="far fa-bell"> </i></p>
                            <p className="item-message">You have 4 pending tasks.</p>
                            <p className="time-notification">Just Now</p>
                        </li>
                        <li>
                            <p className="icon"><i style={{backgroundColor: '#36BEA6'}} className="fas fa-server"> </i></p>
                            <p className="item-message">Server #1 overloaded.</p>
                            <p className="time-notification">2 Hours ago</p>
                        </li>
                        <li>
                            <p className="icon"><i style={{backgroundColor: '#FFBC34'}} className="fas fa-shopping-cart"> </i></p>
                            <p className="item-message">You have 4 pending tasks.</p>
                            <p className="time-notification">31 May</p>
                        </li>
                        <li>
                            <p className="icon"><i style={{backgroundColor: '#F62D51'}} className="far fa-user"> </i></p>
                            <p className="item-message">You have 4 pending tasks.</p>
                            <p className="time-notification">30 May</p>
                        </li>
                        <li>
                            <p className="icon"><i style={{backgroundColor: '#343A40'}} className="far fa-bell"> </i></p>
                            <p className="item-message">You have 4 pending tasks.</p>
                            <p className="time-notification">27 May</p>
                        </li>
                        <li>
                            <p className="icon"><i style={{backgroundColor: '#009efb'}} className="far fa-bell"> </i></p>
                            <p className="item-message">You have 4 pending tasks.</p>
                            <p className="time-notification">Just Now</p>
                        </li>
                        <li>
                            <p className="icon"><i style={{backgroundColor: '#F62D51'}} className="far fa-user"> </i></p>
                            <p className="item-message">You have 4 pending tasks.</p>
                            <p className="time-notification">30 May</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}