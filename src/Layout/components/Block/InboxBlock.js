import React, {useEffect} from "react";

import "./style/Main.scss";

export default function InboxBlock({inbox}){
    const inb = document.getElementById("inbox");
    useEffect(() => {
        inb?.addEventListener("click", (e) => {
            e.stopPropagation();
        })
    }, [inbox, inb]);

    let items =[
        {id: 1, spanClass: "title", spanTitle: "Mailbox", icon: "far fa-envelope-open"},
        {id: 2, spanClass: "title", spanTitle: "Mailbox Detail", icon: "fas fa-mail-bulk"},
        {id: 3, spanClass: "title", spanTitle: "Compose Mail", icon: "far fa-edit"},
    ];

    return(
        <div className={inbox ? "dropdown-show dropdown-list" : "dropdown-hide"} id="inbox">
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