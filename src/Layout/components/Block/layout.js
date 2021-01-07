import React from "react";
import { Carousel } from "react-bootstrap";

import "./style/layout.scss";

export default function Layout() {
    return (
        <div className="layout">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-12 carousel-items">
                        <h4>CAROUSEL</h4>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/images/img1.jpg"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/images/img2.jpg"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/images/img3.jpg"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}