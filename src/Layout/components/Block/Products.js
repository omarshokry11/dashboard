import React from "react";
import "./style/Products.scss";
import Select from 'react-select';
import { Image } from "react-bootstrap";

class Products extends React.Component{

    state = {
        checked: false,
    }

    setCheckboxValue = (event) => {
        this.setState({
            checked: event.target.checked,
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            image: null
        };

        this.onImageChange = this.onImageChange.bind(this);
    }

    onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            this.setState({
                image: URL.createObjectURL(img)
            });
        }
    };

    render() {
        const options = [
            { value: 'Keyword1', label: 'Keyword1' },
            { value: 'Keyword2', label: 'Keyword2' },
            { value: 'Keyword3', label: 'Keyword3' }
        ]
        return(
            <div className="product-box">
                <div className="product-item">
                    <div className="product">
                        <div className="item">
                            <label>Product Name</label>
                            <input type="text"/>
                        </div>
                        <div className="item">
                            <label>Product Quantity</label>
                            <input type="text"/>
                        </div>
                    </div>
                    <div className="product-price">
                        <div className="item">
                            <label>Product Price</label>
                            <input type="text"/>
                        </div>
                        <div className="item">
                            <label>Type Price</label>
                            <select>
                                <option>EG</option>
                                <option>USD</option>
                            </select>
                        </div>
                    </div>
                    <div className="product-discount">
                        <div className="item-discount">
                            <label>Discount</label>
                            <input type="checkbox" checked={this.state.checked} onChange={this.setCheckboxValue} className="checkbox"/>
                        </div>
                        {this.state.checked ? <div className="item">
                            <label>Discount Price</label>
                            <input type="text"/>
                        </div> : null}
                    </div>
                    <div className="product-category">
                       <div className="item">
                           <label>Category</label>
                           <select>
                               <option>Category1</option>
                               <option>Category2</option>
                               <option>Category3</option>
                           </select>
                       </div>
                        <div className="item">
                            <label>Keywords</label>
                            <Select
                                isMulti
                                options={options}
                                className="basic-multi-select"
                                classNamePrefix="select"
                            />
                        </div>
                    </div>
                    <div className="product-photo">
                        <div className="item">
                            <label htmlFor="upload-photo" className="upload-photo">Product Photo <i className="fa fa-upload"> </i> </label>
                            <input type="file" id="upload-photo" name="myImage" onChange={this.onImageChange} />
                            {this.state.image ? <Image src={this.state.image}/> : null}
                        </div>
                        <div className="item">
                            <label>product Details</label>
                            <textarea />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Products;