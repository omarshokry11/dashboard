import React, {useEffect, useState} from "react";
import { Image } from "react-bootstrap";
import API from "../../../utilize/API.js";
import "./style/Products.scss";

export default function Products() {
    const [form, setForm] = useState({ name: "", category: "", price: "", old_price: "", quantity: 0, currency: "", checked: false, image: "", photos: [], thumbnail: {}, description: ""});
    const [categories, setCategories] = useState([]);
    const [selectedImages, setSelectedImages] = useState([]);

    function onAddProduct() {
        API("products", "POST", form)
            .then(({ data, status }) => {
                if (status === 200) {
                    console.log(data)
                } else {
                    console.log(data)
                }
            })
    }

    useEffect(() => {
        API("category")
            .then(({ data, status }) => {
                if (status === 200) {
                    setCategories(data?.categories);
                } else {
                    console.log(data);
                }
            })
    }, [])
    console.log(form)

    const imageHandleChange = (e) => {
        if (e.target.files) {
            const fileArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
            setSelectedImages((prevImages) => prevImages.concat(fileArray))
            Array.from(e.target.files).map(
                (file) => URL.revokeObjectURL(file)
            )
        }
    }

    const renderPhotos = (source) => {
        return source.map((photo) => {

            return <Image src={photo} key={photo} />
        })
    }

    const onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setForm({ ...form, image: URL.createObjectURL(img), thumbnail: img });
        }
    };
    console.log(form)

    return(
        <div className="product-box">
            <div className="product-item">
                <div className="product">
                    <div className="item">
                        <label>Product Name</label>
                        <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} type="text"/>
                    </div>
                    <div className="item">
                        <label>Product Quantity</label>
                        <input value={form.quantity} onChange={(e) => setForm({ ...form, quantity: parseInt(e.target.value) })}  type="text"/>
                    </div>
                </div>
                <div className="product-price">
                    <div className="item">
                        <label>Product Price</label>
                        <input value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })}  type="text"/>
                    </div>
                    <div className="item">
                        <label>Type Price</label>
                        <select onChange={(e) => setForm({ ...form, currency: e.target.value })}>
                            <option value="eg">EG</option>
                            <option value="usd">USD</option>
                        </select>
                    </div>
                </div>
                <div className="product-discount">
                    <div className="item-discount">
                        <label>Discount</label>
                        <input type="checkbox" checked={form.checked} onChange={(e) => setForm({ ...form, checked: e.target.checked })} className="checkbox"/>
                    </div>
                    {form.checked ? <div className="item">
                        <label>Discount Price</label>
                        <input type="text" value={form.old_price} onChange={(e) => setForm({ ...form, old_price: e.target.value })} />
                    </div> : null}
                </div>
                <div className="product-category">
                   <div className="item">
                       <label>Category</label>
                       <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
                           {
                               categories?.map(category => <option value={category.name} key={category._id}>{category.name}</option>)
                           }
                       </select>
                   </div>
                </div>
                <div className="product-brand">
                    <div className="item">
                        <label>Brand</label>
                        <select>
                            <option value="Brand 1">Brand 1</option>
                            <option value="Brand 2">Brand 2</option>
                            <option value="Brand 3">Brand 3</option>
                        </select>
                    </div>
                </div>
                <div className="product-photo">
                    <div className="item thumbnail-photo">
                        <label htmlFor="upload-photo" className="upload-photo">Product Photo <i className="fa fa-upload"> </i> </label>
                        <input type="file" id="upload-photo" name="myImage" onChange={onImageChange} />
                        {form.image.length > 0 ? <Image src={form.image} /> : null}
                    </div>
                    <div className="item photo-product">
                        <label htmlFor="file" className="upload-photo">Thumbnail Photo <i className="fa fa-upload"> </i> </label>
                        <input type="file" id="file" multiple onChange={(e) => {
                            setForm({...form, photos: [{...form.photos, photo:(e.target.files)}]})
                            imageHandleChange(e)
                        }} />
                        <div>
                            {renderPhotos(selectedImages)}
                        </div>
                    </div>
                </div>
                <div className="item">
                    <label>product Details</label>
                    <textarea  value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
                </div>
                <div className="product-button">
                    <button onClick={() => onAddProduct()}>Create Product</button>
                </div>
            </div>
        </div>
    )
}