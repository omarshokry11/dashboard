import React, {useEffect} from "react";

import "./style/main.scss";

export default function ElementBlock({element}){
    const ele = document.getElementById("element");
    useEffect(() => {
        ele?.addEventListener("click", (e) => {
            e.stopPropagation();
        })
    }, [element, ele]);

    return(
        <div className={element ? "dropdown-show dropdown-list" : "dropdown-hide"} id="element">
            <ul className="list-dropdown">
                <li>
                    <span className="title">Cards</span>
                    <i className="fas fa-layer-group"> </i>
                </li>
                <li>
                    <span className="title">User Cards</span>
                    <i className="far fa-user"> </i>
                </li>
                <li>
                    <span className="title">Session Idea Timeout</span>
                    <i className="far fa-clock"> </i>
                </li>
                <li>
                    <span className="title">List Media</span>
                    <i className="fas fa-th-large"> </i>
                </li>
            </ul>
        </div>
    )
}