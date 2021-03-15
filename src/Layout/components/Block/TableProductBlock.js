import React from "react";
import {Image} from "react-bootstrap";

import "./style/TableProductBlock.scss";


export default function TableProductBlock() {
    let items = [
        {id: 1, className: "table-product-item", title: 1, img: "/product1.png", productName: "Huawei mate 40", brand: "Huawei", price: "$1000", currency: "USD", sale: "fas fa-check-circle sale"},
        {id: 2, className: "table-product-item", title: 2, img: "/product2.webp", productName: "Iphone X", brand: "Apple", price: "$1100", currency: "USD", unSale: "fas fa-times-circle unsale"},
    ]

    return (
        <div className="product-item-box">
            <div className="table-product-box">
                <div className="table-product-item-box">
                    <div className="table-product-header">
                        <div>
                            <h5>#</h5>
                        </div>
                        <div>
                            <h5>Image</h5>
                        </div>
                        <div>
                            <h5>Product Name</h5>
                        </div>
                        <div>
                            <h5>Brand</h5>
                        </div>
                        <div>
                            <h5>Price</h5>
                        </div>
                        <div>
                            <h5>Currency</h5>
                        </div>
                        <div>
                            <h5>Sale</h5>
                        </div>
                        <div>
                            <h5>Control Panel</h5>
                        </div>
                    </div>
                    <div className="table-product-body">
                        {items.map(
                            (item, id=1) => <div className={item.className}  key={item.id}>
                                <div>
                                    {item.title ? <h6>#{item.title}</h6> : null}
                                </div>
                                <div>
                                    {item.img ? <Image src={item.img} /> : null}
                                </div>
                                <div>
                                    {item.productName ? <h6 className="name">{item.productName}</h6> : null}
                                </div>
                                <div>
                                    {item.brand ? <h6>{item.brand}</h6> : null}
                                </div>
                                <div>
                                    {item.price ? <h6>{item.price}</h6> : null}
                                </div>
                                <div>
                                    {item.currency ? <h6>{item.currency}</h6> : null}
                                </div>
                                <div>
                                    {item.sale ? <h6><i className={item.sale}> </i></h6> : <h6><i className={item.unSale}> </i></h6>}
                                </div>
                                <div>
                                    <button>
                                        <i className="fas fa-pen"> </i>
                                    </button>
                                    <button>
                                        <i className="fas fa-laptop"> </i>
                                    </button>
                                    <button className="clear">
                                        <i className="fas fa-times"> </i>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}