import React, {useEffect, useState} from 'react';
import { Image } from "react-bootstrap";

import "./style/sidebar.scss";

export default function Sidebar() {
    const [app, setApp] = useState(false);
    const [inbox, setIInbox] = useState(false);
    const [elements, setElements] = useState(false);
    const [dashboard, setDashboard] = useState(false);

    useEffect(() => {
        if(app || inbox || elements || dashboard) {
            const settings = document.querySelector("#settings");
            settings?.addEventListener("click", (e) => {
                e.stopPropagation();
            })
            document.addEventListener("click", () => {
                setApp(false);
                setIInbox(false);
                setElements(false);
                setDashboard(false);
            })
        }
    }, [app, inbox, elements, dashboard])

    return(
        <div className="sidebar">
            <div className="logo">
                <Image src="/images/logo/logo-icon.png" />
            </div>
            <div className="dashboard">
                <div className="title" onClick={(e) => {
                    console.log("123")
                    if(elements || inbox || app) {
                        console.log("!!!")
                        setElements(false);
                        setIInbox(false);
                        setApp(false);
                    } else {
                        e.stopPropagation();
                    }
                    setDashboard(!dashboard);
                }}>
                    <span className="title-name">Dashboard</span>
                    <span className="number">4</span>
                    <span className="icon"><i className="fas fa-angle-down"> </i></span>
                    <span className="icon-logo"><i className="fas fa-tachometer-alt"> </i></span>
                </div>
                <ul className={dashboard ? "list display-profile" : "profile"} id="settings">
                    <li className="active link">
                        <a href="/" className="a">Minimal</a>
                        <span className="icons"><i className="far fa-circle"> </i></span>
                    </li>
                    <li className="link">
                        <a href="/" className="a">Analytical</a>
                        <span className="icons two"><i className="far fa-circle"> </i></span>
                    </li>
                    <li className="link">
                        <a href="/" className="a">Demo Graphical</a>
                        <span className="icons three"><i className="far fa-circle"> </i></span>
                    </li>
                    <li className="link">
                        <a href="/" className="a">Modern</a>
                        <span className="icons four"><i className="far fa-circle"> </i></span>
                    </li>
                    <li className="link">
                        <a href="/" className="a">Cryptocurrency</a>
                        <span className="icons five"><i className="far fa-circle"> </i></span>
                    </li>
                </ul>
            </div>
            <div className="apps">
                <div className="title" onClick={(e) => {
                    console.log("123")
                    if(elements || inbox || dashboard) {
                        console.log("!!!")
                        setElements(false);
                        setIInbox(false);
                        setDashboard(false);
                    } else {
                        e.stopPropagation();
                    }
                    setApp(!app);
                }}>
                    <span className="title-name">Apps</span>
                    <span className="icon"><i className="fas fa-angle-right"> </i></span>
                    <span className="icon-logo"><i className="fas fa-th-large"> </i></span>
                </div>
                <ul className={app ? "list display-profile" : "profile"} id="settings">
                    <li className="link">
                        <a href="/">Calendar</a>
                        <span className="icons"><i className="far fa-calendar"> </i></span>
                    </li>
                    <li className="link">
                        <a href="/">Chat app</a>
                        <span className="icons"><i className="far fa-comment-alt"> </i></span>
                    </li>
                    <li className="link">
                        <a href="/">Support Ticket</a>
                        <span className="icons"><i className="far fa-check-square"> </i></span>
                    </li>
                    <li className="link">
                        <a href="/">Contact / Employee</a>
                        <span className="icons"><i className="far fa-user"> </i></span>
                    </li>
                    <li className="link">
                        <a href="/">Contact Grid</a>
                        <span className="icons"><i className="fas fa-list-ul"> </i></span>
                    </li>
                    <li className="link">
                        <a href="/">Contact Detail</a>
                        <span className="icons"><i className="far fa-edit"> </i></span>
                    </li>
                </ul>
            </div>
            <div className="inbox">
                <div className="title" onClick={(e) => {
                    console.log("123")
                    if(elements || app || dashboard) {
                        console.log("!!!")
                        setElements(false);
                        setApp(false);
                        setDashboard(false);
                    } else {
                        e.stopPropagation();
                    }
                    setIInbox(!inbox);
                }}>
                    <span className="title-name">Inbox</span>
                    <span className="icon"><i className="fas fa-angle-right"> </i></span>
                    <span className="icon-logo"><i className="far fa-envelope"> </i></span>
                </div>
                <ul className={inbox ? "list display-profile" : "profile"} id="settings">
                    <li className="link">
                        <a href="/">Mailbox</a>
                        <span className="icons"><i className="far fa-envelope-open"> </i></span>
                    </li>
                    <li className="link">
                        <a href="/">Mailbox Detail</a>
                        <span className="icons"><i className="fas fa-layer-group"> </i></span>
                    </li>
                    <li className="link">
                        <a href="/">Compose Mail</a>
                        <span className="icons"><i className="far fa-edit"> </i></span>
                    </li>
                </ul>
            </div>
            <div className="elements">
                <div className="title" onClick={(e) => {
                    console.log("123")
                    if(dashboard || inbox || app) {
                        console.log("!!!")
                        setDashboard(false);
                        setIInbox(false);
                        setApp(false);
                    } else {
                        e.stopPropagation();
                    }
                    setElements(!elements);
                }}>
                    <span className="title-name">Ui Elements</span>
                    <span className="number">25</span>
                    <span className="icon"><i className="fas fa-angle-right"> </i></span>
                    <span className="icon-logo"><i className="fas fa-palette"> </i></span>
                </div>
                <ul className={elements ? "list display-profile" : "profile"} id="settings">
                    <li className="link">
                        <a href="/">Cards</a>
                        <span className="icons"><i className="fas fa-layer-group"> </i></span>
                    </li>
                    <li className="link">
                        <a href="/">User Cards</a>
                        <span className="icons"><i className="far fa-user"> </i></span>
                    </li>
                    <li className="link">
                        <a href="/">Buttons</a>
                        <span className="icons"><i className="fas fa-ellipsis-h"> </i></span>
                    </li>
                    <li className="link">
                        <a href="/">Modals</a>
                        <span className="icons"><i className="fas fa-sliders-h"> </i></span>
                    </li>
                    <li className="link">
                        <a href="/">Tab</a>
                        <span className="icons"><i className="fas fa-outdent"> </i></span>
                    </li>
                </ul>
            </div>
            <div className="logout">
                <div className="link">
                    <a href="/">Log Out</a>
                    <i className="far fa-circle"> </i>
                </div>
            </div>
        </div>
    )
}