import React, {useEffect} from "react";

import "./style/Main.scss";

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
                    <span className="title">
                        <a href="/product">Product</a>
                    </span>
                    <a href="/product"><i className="fas fa-cart-arrow-down"> </i></a>
                </li>
                <li>
                    <span className="title">
                        <a href="/tableProduct">TableProductBlock</a>
                    </span>
                    <a href="/tableProduct"><i className="fas fa-cart-plus"> </i></a>
                </li>
            </ul>
        </div>
    )
}