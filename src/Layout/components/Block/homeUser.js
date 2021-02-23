import React from "react";
import {Image} from "react-bootstrap";
import "./style/homeUser.scss";

export default function HomeUser(){
    return(
        <div className="user-box">
            <div className="user-title">
                <h5>User Activity</h5>
                <h6>This is the users daily activity</h6>
            </div>
            <div className="item-user-box">
                <div className="item">
                    <div className="icon">
                        <i className="far fa-user" style={{ backgroundColor: '#01c0c8'}}> </i>
                    </div>
                    <div className="item-details">
                        <p>Meeting today <span>5pm</span></p>
                        <span>you can write anything</span>
                    </div>
                </div>
                <div className="item padding-top">
                    <div className="icon">
                        <i className="fas fa-image" style={{ backgroundColor: '#009EFB'}}> </i>
                    </div>
                    <div className="item-details">
                         <p>Send documents to Clark</p>
                        <span>Lorem Ipsum is simply</span>
                    </div>
                </div>
                <div className="item padding-top">
                    <div className="icon">
                        <Image src="/2.jpg" />
                    </div>
                    <div className="item-details">
                         <p>Go to the Doctor <span>5 minutes ago</span></p>
                        <span>Contrary to popular belief</span>
                    </div>
                </div>
                <div className="item padding-top">
                    <div className="icon">
                        <Image src="/3.jpg" />
                    </div>
                    <div className="item-details">
                         <p>
                             <a href="/">Tiger Sroff</a>
                             <span>5 minutes ago</span></p>
                        <span>Approve meeting with tiger</span>
                        <div className="button">
                            <button className="btn-apporve">Apporve</button>
                            <button className="btn-refuse">Refuse</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}