import React, {useEffect} from "react";
import { Image, Carousel } from "react-bootstrap";

import "./style/CarouselBlock.scss";

export default function CarouselBlock({carousel}){
    const car = document.getElementById("carousel");
    useEffect(() => {
        car?.addEventListener("click", (e) => {
            e.stopPropagation();
        })
    }, [carousel, car]);

    return(
        <div className={carousel ? "carousel-block dropdown-show" : "dropdown-hide"} id="carousel">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-12">
                        <div className="carousel-title">
                            <h4>CAROUSEL</h4>
                        </div>
                        <Carousel>
                            <Carousel.Item>
                                <Image
                                    className="d-block w-100"
                                    src="img1.jpg"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image
                                    className="d-block w-100"
                                    src="img2.jpg"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image
                                    className="d-block w-100"
                                    src="img3.jpg"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="col-md-3 col-12">
                        <div className="carousel-title">
                            <h4>ACCORDION</h4>
                        </div>
                        <h5><a href="/">Collapsible Group Item #1</a></h5>
                        <span>Anim pariatur cliche reprehenderit, enim eiusmod high.</span>
                        <h5><a href="/">Collapsible Group Item #1</a></h5>
                        <h5><a href="/">Collapsible Group Item #1</a></h5>
                    </div>
                    <div className="col-md-3 col-12">
                        <div className="carousel-title">
                            <h4>CONTACT US</h4>
                        </div>
                        <div className="form">
                            <input type="text" placeholder="Enter Name" />
                            <input type="text" placeholder="Enter E-mail" />
                            <textarea placeholder="Message" />
                            <button className="submit" type="submit">Submit</button>
                        </div>
                    </div>
                    <div className="col-md-3 col-12">
                        <div className="carousel-title">
                            <h4>List style</h4>
                        </div>
                        <ul className="list-style">
                            <li><i className="fas fa-check"> </i> <a href="/">You can give link</a></li>
                            <li><i className="fas fa-check"> </i> <a href="/">Give link</a></li>
                            <li><i className="fas fa-check"> </i> <a href="/">Another Give link</a></li>
                            <li><i className="fas fa-check"> </i> <a href="/">Forth link</a></li>
                            <li><i className="fas fa-check"> </i> <a href="/">Another fifth link</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}