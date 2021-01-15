import React, {useEffect} from "react";
import {Image} from "react-bootstrap";

import "./style/messageBlock.scss";

export default function MessageBlock({message}){
    const messages = document.getElementById("message");
    useEffect(() => {
        messages?.addEventListener("click", (e) => {
            e.stopPropagation();
        })
    }, [message, messages]);

    return(
        <div className={message ? "message dropdown-show" : "dropdown-hide"} id="message">
            <div className="arrow"> </div>
            <div className="message-title">
                <h5>5 New</h5>
                <p>Message</p>
            </div>
            <div className="message-item">
                <div className="item">
                   <div className="img-item">
                       <Image src="/1.jpg" />
                       <span style={{ background: '#01c0c8'}}> </span>
                   </div>
                    <div className="item-details">
                        <h6>Pavan Kumar</h6>
                        <p>Just see the my admin!</p>
                        <span>9:30 AM</span>
                    </div>
                </div>
                <div className="item">
                    <div className="img-item">
                        <Image src="/2.jpg" />
                        <span style={{ background: '#f62d51'}}> </span>
                    </div>
                    <div className="item-details">
                        <h6>Pavan Kumar</h6>
                        <p>I've sung a song! See you at</p>
                        <span>9:10 AM</span>
                    </div>
                </div>
                <div className="item">
                    <div className="img-item">
                        <Image src="/3.jpg" />
                        <span style={{ background: '#ffbc34'}}> </span>
                    </div>
                    <div className="item-details">
                        <h6>Pavan Kumar</h6>
                        <p>I am a singer!</p>
                        <span>9:08 AM</span>
                    </div>
                </div>
                <div className="item">
                    <div className="img-item">
                        <Image src="/4.jpg" />
                        <span style={{ background: '#ffbc34'}}> </span>
                    </div>
                    <div className="item-details">
                        <h6>Pavan Kumar</h6>
                        <p>Just see the my admin!</p>
                        <span>9:02 AM</span>
                    </div>
                </div>
            </div>
            <div className="message-footer">
                <p>See all e-Mails <i className="fas fa-angle-right"> </i></p>
            </div>
        </div>
    )
}