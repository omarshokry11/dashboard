import React, {useEffect, useState} from "react";
import {Carousel, Image} from "react-bootstrap";
import "../Block/style/message.scss";

import "./style/topnavbar.scss";

export default function TopNavbar() {
    const [profile, setProfile]= useState(false);
    const [message, setMessage]= useState(false);
    const [notification, setNotification]= useState(false);
    const [layout, setLayout]= useState(false);

    useEffect(() => {
        if(profile || message || notification || layout) {
            const settings = document.querySelector("#settings");
            settings?.addEventListener("click", (e) => {
                e.stopPropagation();
            })
            document.addEventListener("click", () => {
                setMessage(false);
                setNotification(false);
                setProfile(false);
                setLayout(false);
            })
        }
    }, [profile, message, notification, layout])

    return(
        <>
            <div className="top-navbar">
                <div className="logo">
                    <Image src="/images/logo/logo.png"/>
                </div>
                <div className="notify">
                    <button className="button" onClick={(e) => {
                        console.log("123")
                        if(profile || notification || layout) {
                            console.log("!!!")
                            setProfile(false);
                            setNotification(false);
                            setLayout(false);
                        } else {
                            e.stopPropagation();
                        }
                        setMessage(!message);
                    }}><i className="fas fa-envelope"> </i></button>
                    <button className="button" onClick={(e) => {
                        console.log("123")
                        if(message || notification || layout) {
                            console.log("!!!")
                            setProfile(false);
                            setMessage(false);
                            setLayout(false);
                        } else {
                            e.stopPropagation();
                        }
                        setNotification(!notification);
                    }}><i className="far fa-edit"> </i></button>
                    <button className="button"><i className="fas fa-search"> </i></button>
                </div>
                <div className="input">
                    <input type="text" placeholder="Search & Enter"/>
                    <i className="fas fa-times"> </i>
                </div>
                <div className="main-profile">
                    <button className="layout-icon"><Image src="/images/logo/layout-icon.png" onClick={(e) => {
                        console.log("123")
                        if(profile || notification || message) {
                            console.log("!!!")
                            setProfile(false);
                            setNotification(false);
                            setMessage(false);
                        } else {
                            e.stopPropagation();
                        }
                        setLayout(!layout);
                    }}/></button>
                    <Image className="img-user" src="/images/users/1.jpg"  onClick={(e) => {
                        if(message || notification || layout) {
                            console.log("!!!")
                            setNotification(false);
                            setMessage(false);
                            setLayout(false);
                        } else {
                            e.stopPropagation();
                        }
                            setProfile(!profile);
                    }}/>
                </div>
            </div>
            <div className={profile ? "profile display-profile" : "profile"} id="settings">
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
            <div className={message ? "messages display-profile" : "profile"} id="settings">
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
            <div className={notification ? "notification display-profile" : "profile"} id="settings">
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
            <div className={layout ? "layout display-profile" : "profile"} id="settings">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 col-12 carousel-items">
                            <h4>CAROUSEL</h4>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="/images/img1.jpg"
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="/images/img2.jpg"
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="/images/img3.jpg"
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className="col-md-3 col-12 carousel-items">
                            <h4>ACCORDION</h4>
                            <div className="details">
                                <h5 className="card-item">
                                    <a href="/">Collapsible Group Item #1</a>
                                </h5>
                                <div className="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high.</div>
                                <h5 className="card-item">
                                    <a href="/">Collapsible Group Item #2</a>
                                </h5>
                                <h5 className="card-item">
                                    <a href="/">Collapsible Group Item #3</a>
                                </h5>
                            </div>
                        </div>
                        <div className="col-md-3 col-12 carousel-items">
                            <h4>CONTACT US</h4>
                            <div className="form">
                                <input type="text" placeholder="Enter Name"/>
                                <input type="text" placeholder="Enter Email"/>
                                <textarea placeholder="Message" rows="3"> </textarea>
                                <button type="submit">Submit</button>
                            </div>
                        </div>
                        <div className="col-md-3 col-12 carousel-items">
                            <h4>List style</h4>
                            <ul className="list-style">
                                <li><i className="fas fa-check"> </i><a href="/">You can give link</a></li>
                                <li><i className="fas fa-check"> </i><a href="/">Give link</a></li>
                                <li><i className="fas fa-check"> </i><a href="/">Another give link</a></li>
                                <li><i className="fas fa-check"> </i><a href="/">Forth link</a></li>
                                <li><i className="fas fa-check"> </i><a href="/">Another fifth link</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}