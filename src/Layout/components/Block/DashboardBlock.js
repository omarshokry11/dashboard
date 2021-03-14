import React, {useEffect} from "react";

import "./style/Main.scss";

export default function DashboardBlock({ dashboard }) {

    const dash = document.getElementById("dashboard");
    useEffect(() => {
        dash?.addEventListener("click", (e) => {
            e.stopPropagation();
        })
    }, [dashboard, dash]);

    let items = [
        {id: 1, spanClass: "title", spanTitle: "Minimal", icon: "far fa-circle minimal"},
        {id: 2, spanClass: "title", spanTitle: "Analytical", icon: "far fa-circle Analytical"},
        {id: 3, spanClass: "title", spanTitle: "Demographical", icon: "far fa-circle Demographical"},
        {id: 4, spanClass: "title", spanTitle: "Modern", icon: "far fa-circle Modern"},
        {id: 5, spanClass: "title", spanTitle: "CryPtocurrency", icon: "far fa-circle CryPtocurrency"},
    ];

    return(
        <div className={dashboard ? "dropdown-show dropdown-list" : "dropdown-hide"} id="dashboard">
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