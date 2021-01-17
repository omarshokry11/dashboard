import React, {useEffect, useState} from "react";
import {Image} from "react-bootstrap";
import MessageBlock from "./Block/messageBlock";
import NotificationBlock from "./Block/notificationBlock";
import ProfileBlock from "./Block/profileBlock";
import CarouselBlock from "./Block/carouselBlock";
import "./style/navbar.scss";

export default function Navbar(){
    const [message, setMessage] = useState(false);
    const [notification, setNotification] = useState(false);
    const [profile, setProfile] = useState(false);
    const [carousel, setCarousel] = useState(false);

    useEffect(() => {
        document.addEventListener("click", () => {
            if(message || notification || profile || carousel){
                setMessage(false);
                setNotification(false);
                setProfile(false);
                setCarousel(false);
            }
        })
    }, [message, notification, profile, carousel]);

    return(
        <>
            <div className="navbar">
                <div className="logo-navbar">
                    <Image src="/logo.png" />
                </div>
                <div className="item-notification">
                    <div className="icon" onClick={(e) => {
                        if (message || carousel || profile) {
                            setNotification(true);
                            setMessage(false);
                            setCarousel(false);
                            setProfile(false);
                        } else {
                            e.stopPropagation();
                        }
                        setNotification(!notification);
                    }}>
                        <i className="far fa-envelope"> </i>
                        <span className="pulse"> </span>
                    </div>
                    <div className="icon" onClick={(e) => {
                        if (notification || carousel || profile) {
                            setMessage(true);
                            setNotification(false);
                            setCarousel(false);
                            setProfile(false);
                        } else {
                            e.stopPropagation();
                        }
                        setMessage(!message);
                    }}>
                        <i className="far fa-edit"> </i>
                        <span className="pulse"> </span>
                    </div>
                    <div className="icon"><i className="fas fa-search"> </i></div>
                </div>
                <div className="item">
                    <div className="layout">
                        <Image src="/carousel-icon.png" onClick={(e) => {
                            if (notification || profile || message) {
                                setCarousel(true);
                                setNotification(false);
                                setProfile(false);
                                setMessage(false);
                            } else {
                                e.stopPropagation();
                            }
                            setCarousel(!carousel);
                        }} />
                    </div>
                    <div className="profile">
                        <Image src="/1.jpg" onClick={(e) => {
                            if (notification || carousel || message) {
                                setProfile(true);
                                setNotification(false);
                                setCarousel(false);
                                setMessage(false);
                            } else {
                                e.stopPropagation();
                            }
                            setProfile(!profile);
                        }} />
                    </div>
                </div>
            </div>
            <MessageBlock message={message} />
            <NotificationBlock notification={notification} />
            <CarouselBlock carousel={carousel} />
            <ProfileBlock profile={profile} />
        </>
    )
}