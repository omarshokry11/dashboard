import React from "react";
import "./style/TableBlock.scss";

export default function TableBlock(){
    let items =[
        {id: 1, className: "status paid",  class: "item-body", link: "Order #53431", name: "Steve N. Horton", history: "Oct 22, 2014", price: "$45.00", status: "Paid", tracking: "-"},
        {id: 2, className: "status shipped",  class: "item-body", link: "Order #53432", name: "Charles S Boyle", history: "Oct 24, 2014", price: "$245.30", status: "Shipped", icon: "fas fa-plane", tracking: "CGX0089734531"},
        {id: 3, className: "status shipped",  class: "item-body", link: "Order #53433", name: "Lucy Doe", history: "Oct 24, 2014", price: "$38.00", status: "Shipped", icon: "fas fa-plane", tracking: "CGX0089934571"},
        {id: 4, className: "status shipped",  class: "item-body", link: "Order #53434", name: "Teresa L. Doe", history: "Oct 15, 2014", price: "$77.99", status: "Shipped", icon: "fas fa-plane", tracking: "CGX0089734574"},
        {id: 5, className: "status paid",  class: "item-body", link: "Order #53435", name: "Teresa L. Doe", history: "Oct 12, 2014", price: "$18.00", status: "Paid", tracking: "-"},
        {id: 6, className: "status Refunded",  class: "item-body", link: "Order #53437", name: "Charles S Boyle", history: "Oct 17, 2014", price: "$658.00", status: "Refunded", tracking: "-"},
        {id: 7, className: "status Unpaid",  class: "item-body", link: "Order #536584", name: "Scott S. Calabrese", history: "Oct 19, 2014", price: "$45.58", status: "Unpaid", tracking: "-"}
    ];

    let tableHeader = [
        {id: 1, className: "item", title: "Invoice"},
        {id: 2, className: "item", title: "User"},
        {id: 3, className: "item", title: "Order date"},
        {id: 4, className: "item", title: "Amount"},
        {id: 5, className: "item", title: "Status"},
        {id: 6, className: "item", title: "Tracking Number"},
    ];

    return(
        <div className="paddingBottom">
            <div className="table-title">
                <h5>ORDER STATUS</h5>
            </div>
            <div className="table-item-box">
               <div className="table-box">
                   <div className="table-head-item">
                       {tableHeader.map(
                           (head) => <div className={head.className} key={head.id}>
                                <h6>{head.title}</h6>
                           </div>
                       )}
                   </div>
                   <div className="table-body-item">
                       {items.map(
                           (item) => <div className={item.class} key={item.id}>
                                <div>
                                    <a href="/">{item.link}</a>
                                </div>
                                <div>
                                    <span>{item.name}</span>
                                </div>
                                <div>
                                    <span className="date">{item.history}</span>
                                </div>
                                <div>
                                    <span>{item.price}</span>
                                </div>
                                <div>
                                    <span className={item.className}>{item.status}</span>
                                </div>
                                <div>
                                    <span> <i className={item.icon}> </i> {item.tracking}</span>
                                </div>
                           </div>
                       )}
                   </div>
               </div>
            </div>
        </div>
    )
}