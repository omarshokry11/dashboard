import React, {useEffect, useState} from "react";
import {Image} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./style/TableProductBlock.scss";
import API from "../../../utilize/API";

export default function TableProductBlock() {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState([]);
    const [form, setForm] = useState([]);

    useEffect(() => {
        API("products")
            .then(({ data, status }) => {
                if (status === 200) {
                    setProducts(data?.products);
                } else {
                    console.log(data);
                }
            })
    }, []);
    console.log(products);

    function editProduct(slug){
        API(`products/${slug}`, "PATCH", form)
            .then(({ data, status }) => {
                if (status === 200) {
                    setForm(data?.product);
                    console.log(data);
                } else {
                    console.log(data);
                }
            })
    }

    function deleteProduct(slug){
        API(`products/${slug}`, "DELETE")
            .then(({ data, status }) => {
                if (status === 200) {
                    window.location.reload();
                } else {
                    console.log(data);
                }
            })
    }

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
                        {products?.map(product => <div className="table-product-item" key={product._id}>
                            <div>
                                <span>#{product._id}</span>
                            </div>
                            <div>
                                <Image src={product.thumbnail} />
                            </div>
                            <div>
                                <h6 className="name">{product.name}</h6>
                            </div>
                            <div>
                                <h6>{product.categories}</h6>
                            </div>
                            <div>
                                <h6>{product.price}</h6>
                            </div>
                            <div>
                                <h6>{product.currency}</h6>
                            </div>
                            <div>
                                <h6><i className={product.sale ? "fas fa-check-circle sale" : "fas fa-times-circle unsale"}> </i></h6>
                            </div>
                            <div className="btn">
                                <Link to={`/product/${product.slug}`}><i className="fas fa-pen"> </i></Link>
                                <Link to={`/products/${product.slug}`}><i className="fas fa-laptop"> </i></Link>
                                <i className="fas fa-times" onClick={() => deleteProduct(product.slug)}> </i>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    );
}