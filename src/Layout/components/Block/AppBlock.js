import React, {useEffect} from "react";

import "./style/Main.scss";

export default function AppBlock({ app }){
    const apps = document.getElementById("app");
    useEffect(() => {
        apps?.addEventListener("click", (e) => {
            e.stopPropagation();
        })
    }, [app, apps]);

    let items =[
        {id: 1, spanClass: "title", spanTitle: "Calendar", icon: "far fa-calendar"},
        {id: 2, spanClass: "title", spanTitle: "Chat app", icon: "far fa-comment-alt"},
        {id: 3, spanClass: "title", spanTitle: "Support Ticket", icon: "fas fa-ticket-alt"},
        {id: 4, spanClass: "title", spanTitle: "Modern", icon: "fas fa-list-ul"},
        {id: 5, spanClass: "title", spanTitle: "CryPtocurrency", icon: "far fa-edit"},
    ];

    return(
        <div className={app ? "dropdown-show dropdown-list" : "dropdown-hide"} id="app">
            <ul className="list-dropdown">
                {items.map(
                    (item) => <li key={item.id}>
                        <span className={item.spanClass}>{item.spanTitle}</span>
                        <i className={item.icon}> </i>
                    </li>
                )}
            </ul>
        </div>
    )
}