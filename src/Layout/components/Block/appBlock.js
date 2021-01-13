import React, {useEffect} from "react";

import "./style/main.scss";

export default function AppBlock({ app }){
    const apps = document.getElementById("app");
    useEffect(() => {
        apps?.addEventListener("click", (e) => {
            e.stopPropagation();
        })
    }, [app, apps]);

    return(
        <div className={app ? "dropdown-show dropdown-list" : "dropdown-hide"} id="app">
            <ul className="list-dropdown">
                <li>
                    <span className="title">Calendar</span>
                    <i className="far fa-calendar"> </i>
                </li>
                <li>
                   <span className="title"> Chat app</span>
                    <i className="far fa-comment-alt"> </i>
                </li>
                <li>
                    <span className="title">Support Ticket</span>
                    <i className="fas fa-ticket-alt"> </i>
                </li>
                <li>
                    <span className="title">Modern</span>
                    <i className="fas fa-list-ul"> </i>
                </li>
                <li>
                    <span className="title">CryPtocurrency</span>
                    <i className="far fa-edit"> </i>
                </li>
            </ul>
        </div>
    )
}