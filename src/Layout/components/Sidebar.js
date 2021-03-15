import React, {useEffect, useState} from "react";
import DashboardBlock from "./Block/DashboardBlock.js";
import AppBlock from "./Block/AppBlock.js";
import "./style/Sidebar.scss";

export default function Sidebar() {
    const [dashboard, setDashboard] = useState(false);
    const [app, setApp] = useState(false);

    useEffect(() => {
        document.addEventListener("click", () => {
            if (dashboard || app) {
                setDashboard(false);
                setApp(false);
            }
        })
    }, [dashboard, app]);

    return (
        <div className="sidebar">
            <div className="dashboard-sidebar">
                <div className="dashboard-sidebar-dropdown">
                    <div className="dropdown-title" onClick={(e) => {
                        if (app) {
                            setDashboard(true);
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
                        if (dashboard) {
                            setApp(true);
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