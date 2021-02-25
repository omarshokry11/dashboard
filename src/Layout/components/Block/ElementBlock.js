import React, {useEffect} from "react";

import "./style/Main.scss";

export default function ElementBlock({element}){
    const ele = document.getElementById("element");
    useEffect(() => {
        ele?.addEventListener("click", (e) => {
            e.stopPropagation();
        })
    }, [element, ele]);

    let items =[
        {id: 1, spanClass: "title", spanTitle: "Cards", icon: "far fa-calendar"},
        {id: 2, spanClass: "title", spanTitle: "User Cards", icon: "far fa-comment-alt"},
        {id: 3, spanClass: "title", spanTitle: "Session Idea Timeout", icon: "fas fa-ticket-alt"},
        {id: 4, spanClass: "title", spanTitle: "List Media", icon: "fas fa-list-ul"},
    ];

    return(
        <div className={element ? "dropdown-show dropdown-list" : "dropdown-hide"} id="element">
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