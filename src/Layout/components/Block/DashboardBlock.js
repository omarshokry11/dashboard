import React, {useEffect} from "react";

import "./style/Main.scss";

export default function DashboardBlock({ dashboard }) {

    const dash = document.getElementById("dashboard");
    useEffect(() => {
        dash?.addEventListener("click", (e) => {
            e.stopPropagation();
        })
    }, [dashboard, dash]);

    return(
        <div className={dashboard ? "dropdown-show dropdown-list" : "dropdown-hide"} id="dashboard">
            <ul className="list-dropdown">
                <li>
                    <span className="title">
                        <a href="/">Minimal</a>
                    </span>
                    <a href="/"><i className="far fa-circle minimal"> </i></a>
                </li>
            </ul>
        </div>
    )
}