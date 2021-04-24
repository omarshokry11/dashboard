import React, {useEffect, useState} from "react";
import {Image} from "react-bootstrap";
import chroma from 'chroma-js';
import Select from 'react-select';
import "./style/FullInformationProduct.scss";
import API from "../../../utilize/API";
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';

const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        const color = chroma(data.color);
        return {
            ...styles,
            backgroundColor: isDisabled
                ? null
                : isSelected
                    ? data.color
                    : isFocused
                        ? color.alpha(0.1).css()
                        : null,
            color: isDisabled
                ? '#ccc'
                : isSelected
                    ? chroma.contrast(color, 'white') > 2
                        ? 'white'
                        : 'black'
                    : data.color,
            cursor: isDisabled ? 'not-allowed' : 'default',

            ':active': {
                ...styles[':active'],
                backgroundColor:
                    !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
            },
        };
    },
    multiValue: (styles, { data }) => {
        const color = chroma(data.color);
        return {
            ...styles,
            backgroundColor: color.alpha(0.1).css(),
        };
    },
};

export default function FullInformationProduct(){
    const [product, setProduct] = useState({});
    const [shipping, setShipping] = useState("");

    useEffect(() => {
        API(`products/${window.location.pathname.replace("/products/","")}`)
            .then(({ data, status }) => {
                if (status === 200) {
                    setProduct(data?.product);
                    console.log(data);
                } else {
                    console.log(data);
                }
            })
    }, []);

    const colourOptions = [
        { value: 'silver', label: 'Silver', color: '#666666' },
        { value: 'Red', label: 'Red', color: '#ff0000' },
        { value: 'Gold', label: 'Gold', color: '#fab443' },
        { value: 'Black', label: 'Black', color: '#000' },
    ];

    return(
        <div className="full-information-product-box">
            <div className="full-information-product-item">
                <div className="product-img-box">
                    <div className="product-img-cover">
                        <Image src={product.thumbnail} />
                    </div>
                    <div className="product-img-item">
                        {product?.photos?.map(img => <Image src={img.photo} key={img._id} />
                        )}
                    </div>
                </div>
                <div className="product-information-box">
                    <div className="product-name">
                        <h4>{product.name}</h4>
                    </div>
                    <div className="product-code">
                        <h6>Product Code: <span>#{product._id}</span></h6>
                        <div className="assess-product">
                            <Rater total={5} rating={2} />
                        </div>
                    </div>
                    <div className="product-color">
                        <h4>Available Color</h4>
                        <Select
                            closeMenuOnSelect={false}
                            defaultValue={[colourOptions[0]]}
                            isMulti
                            options={colourOptions}
                            styles={colourStyles}
                        />
                    </div>
                    <div className="product-quantity">
                        <h4>Quantity: <span className="color">{product.quantity}</span></h4>
                    </div>
                    <div className="product-price">
                        <h4>Price: <span className="color">{product.price}</span></h4>
                    </div>
                    <div className="product-shipping">
                        <h4>Shipping:
                            {shipping === "free" ? <span>Free</span> : null}
                            {shipping === "fast" ? <span>Fast</span> : null}
                            {shipping === "rocket" ? <span>Rocket</span> : null}
                        </h4>
                        <span className={shipping === "free" ? "active" : ""} onClick={() => setShipping("free")}>Free <small>Estimated 15 - 30 days</small></span>
                        <span className={shipping === "fast" ? "active": ""} onClick={() => setShipping("fast")}>Fast <small>Estimated 5 - 7 days</small></span>
                        <span className={shipping === "rocket" ? "active": ""} onClick={() => setShipping("rocket")}>Rocket <small>Estimated 2 - 5 days</small></span>
                    </div>
                    <div className="product-button-check">
                        <button>Check Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}