import React from "react";
import { Image } from "react-bootstrap";

import "./style/message.scss";

export default function Messages () {
    return (
        <div className="messages">
            <div className="new-messages">
                <h4>5 New</h4>
                <p>Messages</p>
            </div>
            <div className="items-users">
                <div className="item-user">
                    <div className="img-user">
                        <Image src="/images/users/1.jpg" />
                        <span className="active-user user-1"> </span>
                    </div>
                    <div className="title">
                        <h6>Pavan Kumar</h6>
                        <span>Just see admin!</span>
                        <span>9:30 AM!</span>
                    </div>
                </div>
                <div className="item-user">
                    <div className="img-user">
                        <Image src="/images/users/2.jpg" />
                        <span className="active-user user-2"> </span>
                    </div>
                    <div className="title">
                        <h6>Sonu Nigam</h6>
                        <span>I've sung a song! See you at</span>
                        <span>9:10 AM!</span>
                    </div>
                </div>
                <div className="item-user">
                    <div className="img-user">
                        <Image src="/images/users/3.jpg" />
                        <span className="active-user user-3"> </span>
                    </div>
                    <div className="title">
                        <h6>Arijit Sinh</h6>
                        <span>I am singer</span>
                        <span>9:08 AM!</span>
                    </div>
                </div>
                <div className="item-user">
                    <div className="img-user">
                        <Image src="/images/users/4.jpg" />
                        <span className="active-user user-3"> </span>
                    </div>
                    <div className="title">
                        <h6>Pavan kumar</h6>
                        <span>Just see admin!</span>
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