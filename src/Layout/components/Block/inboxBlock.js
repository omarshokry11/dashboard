import React, {useEffect} from "react";

import "./style/main.scss";

export default function InboxBlock({inbox}){
    const inb = document.getElementById("inbox");
    useEffect(() => {
        inb?.addEventListener("click", (e) => {
            e.stopPropagation();
        })
    }, [inbox, inb]);

    return(
        <div className={inbox ? "dropdown-show dropdown-list" : "dropdown-hide"} id="inbox">
            <ul className="list-dropdown">
                <li>
                    <span className="title">Mailbox</span>
                    <i className="far fa-envelope-open"> </i>
                </li>
                <li>
                    <span className="title">Mailbox Detail</span>
                    <i className="fas fa-mail-bulk"> </i>
                </li>
                <li>
                   <span className="title"> Compose Mail</span>
                    <i className="far fa-edit"> </i>
                </li>
            </ul>
        </div>
    )
}