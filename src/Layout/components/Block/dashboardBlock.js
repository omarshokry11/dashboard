import React, {useEffect} from "react";

import "./style/main.scss";

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
                    <span className="title">Minimal</span>
                    <i className="far fa-circle" style={{color: '#01c0c8'}}> </i>
                </li>
                <li>
                    <span className="title">Analytical</span>
                    <i className="far fa-circle" style={{color: '#009efb'}}> </i>
                </li>
                <li>
                    <span className="title">Demographical</span>
                    <i className="far fa-circle" style={{color: '#f62d51'}}> </i>
                </li>
                <li>
                    <span className="title">Modern</span>
                    <i className="far fa-circle" style={{color: '#ffbc34'}}> </i>
                </li>
                <li>
                    <span className="title">CryPtocurrency</span>
                    <i className="far fa-circle" style={{color: '#7460ee'}}> </i>
                </li>
            </ul>
        </div>
    )
}