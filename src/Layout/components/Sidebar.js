import React, {useEffect, useState} from "react";
import DashboardBlock from "./Block/DashboardBlock.js";
import AppBlock from "./Block/AppBlock.js";
import InboxBlock from "./Block/InboxBlock.js";
import ElementBlock from "./Block/ElementBlock.js";
import "./style/Sidebar.scss";

export default function Sidebar() {
    const [dashboard, setDashboard] = useState(false);
    const [app, setApp] = useState(false);
    const [inbox, setInbox] = useState(false);
    const [element, setElement] = useState(false);

    useEffect(() => {
        document.addEventListener("click", () => {
            if (dashboard || app || inbox || element) {
                setDashboard(false);
                setApp(false);
                setInbox(false);
                setElement(false);
            }
        })
    }, [dashboard, app, inbox, element]);

    return (
        <div className="sidebar">
            <div className="dashboard-sidebar">
                <div className="dashboard-sidebar-dropdown">
                    <div className="dropdown-title" onClick={(e) => {
                        if (app || inbox || element) {
                            setDashboard(true);
                            setElement(false);
                            setInbox(false);
                            setApp(false);
                        } else {
                            e.stopPropagation();
                        }
                        setDashboard(!dashboard);
                    }}>
                        <h6>Dashboard</h6>
                        <span className="number">4</span>
                        <span className="angle"><i className="fas fa-angle-right"> </i></span>
                        <span className="icon"><i className="fas fa-tachometer-alt"> </i></span>
                    </div>
                    <DashboardBlock dashboard={dashboard}/>
                </div>
                <div className="inbox-sidebar-dropdown">
                    <div className="dropdown-title" onClick={(e) => {
                        if (dashboard || inbox || element) {
                            setApp(true);
                            setElement(false);
                            setInbox(false);
                            setDashboard(false);
                        } else {
                            e.stopPropagation();
                        }
                        setApp(!app);
                    }}>
                        <h6>App</h6>
                        <span className="angle"><i className="fas fa-angle-right"> </i></span>
                        <span className="icon"><i className="fas fa-th-large"> </i></span>
                    </div>
                    <AppBlock app={app}/>
                </div>
                <div className="app-sidebar-dropdown">
                    <div className="dropdown-title" onClick={(e) => {
                        if (dashboard || app || element) {
                            setInbox(true);
                            setElement(false);
                            setApp(false);
                            setDashboard(false);
                        } else {
                            e.stopPropagation();
                        }
                        setInbox(!inbox);
                    }}>
                        <h6>Inbox</h6>
                        <span className="angle"><i className="fas fa-angle-right"> </i></span>
                        <span className="icon"><i className="far fa-envelope"> </i></span>
                    </div>
                    <InboxBlock inbox={inbox} />
                </div>
                <div className="app-sidebar-dropdown">
                    <div className="dropdown-title" onClick={(e) => {
                        if (dashboard || inbox || app) {
                            setElement(true);
                            setApp(false);
                            setInbox(false);
                            setDashboard(false);
                        } else {
                            e.stopPropagation();
                        }
                        setElement(!element);
                    }}>
                        <h6> Ui Elements</h6>
                        <span className="angle"><i className="fas fa-angle-right"> </i></span>
                        <span className="icon"><i className="fas fa-palette"> </i></span>
                    </div>
                    <ElementBlock element={element}/>
                </div>
            </div>
            <div className="logout-sidebar">
                <div className="item-box">
                    <h6>Documentation</h6>
                    <i className="far fa-circle"> </i>
                </div>
                <div className="item-box">
                    <h6>Log Out</h6>
                    <i className="far fa-circle"> </i>
                </div>
            </div>
        </div>
    )
}