import React from "react";
import {Image} from "react-bootstrap";
import Select from 'react-select';
import "./style/Products.scss";

export default function Products(){
    const options = [
        { value: 'Keyword 1', label: 'Keyword 1' },
        { value: 'Keyword 2', label: 'Keyword 2' },
        { value: 'Keyword 3', label: 'Keyword 3' }
    ]

    return(
        <div className="product-box">
            <div className="product-name">
                <label>Product Name</label>
                <Image src="/product.png" />
                <input type="text" placeholder="ProductName" />
            </div>
            <div className="product-quantity">
                <label>Quantity</label>
                <Image src="/quantity.png" />
                <input type="text" placeholder="Quantity" />
            </div>
            <div className="product-category ">
                <label>Category</label>
                <Image src="/category.png" />
                <select>
                    <option>Category 1</option>
                    <option>Category 2</option>
                    <option>Category 3</option>
                </select>
            </div>
            <div className="product-thumbnail">
                <label>Thumbnail</label>
                <div className="product">
                    <div className="product-photo">
                        <Image src="/product.jpg" />
                    </div>
                    <div className="product-price">
                        <div className="price">
                            <p>
                                <strong>Price: </strong>
                                <span>$200</span>
                            </p>
                        </div>
                        <div className="discount ">
                            <input type="checkbox" className="checkbox" />
                            <span>Discount</span>
                        </div>
                        <div className="old-price">
                            <p>
                                <strong>Old-Price: </strong>
                                <span>$150</span>
                            </p>
                        </div>
                        <div className="currency">
                            <select>
                                <option>EG</option>
                                <option>USD</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-photo">
                <label>UploadPhoto</label>
                <Image src="/upload.png" />
                <label htmlFor="upload-photo" className="upload">UploadPhoto</label>
                <input type="file" id="upload-photo" />
            </div>
            <div className="product-description">
                <textarea />
            </div>
            <div className="product-keywords">
                <Select
                    isMulti
                    name="colors"
                    options={options}
                    className="basic-multi-select"
                    classNamePrefix="select"
                />
            </div>
        </div>
    )
}