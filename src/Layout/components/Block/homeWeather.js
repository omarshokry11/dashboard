import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';
import "./style/homeWeather.scss";



export default function HomeWeather(props){
    const defaults = {
        color: '#FF6849',
        size: 44,
        animate: true
    };

    return(
        <div className="weather-box">
            <div className="main-weather">
                <div className="weather-item">
                    <div className="title-weather">
                        <h5>Weather Report</h5>
                        <h6>This is the Ahmedabads Weather report</h6>
                    </div>
                    <div className="weather-day">
                        <div className="day-item">
                            <h2>Monday</h2>
                            <small>7th May 2017</small>
                        </div>
                        <div className="day-temp">
                            <span>
                                <ReactAnimatedWeather
                                    icon={'SLEET'}
                                    color={defaults.color}
                                    size={defaults.size}
                                    animate={defaults.animate}
                                />
                                32
                                <sup>°F</sup>
                            </span>
                        </div>
                    </div>
                    <div className="inner-weather">
                        <div className="item">
                            <span>Wind</span>
                            <span style={{color: '#000', fontWeight: '500'}}>ESE 17 mph</span>
                            <span className="display-none" >Cloud Cover</span>
                            <span className="display-none" style={{color: '#000', fontWeight: '500'}}>78%</span>
                        </div>
                        <div className="item">
                            <span>Humidity</span>
                            <span style={{color: '#000', fontWeight: '500'}}>83%</span>
                            <span className="display-none">Ceiling</span>
                            <span className="display-none" style={{color: '#000', fontWeight: '500'}}>25760 ft</span>
                        </div>
                        <div className="item">
                            <span>Pressure</span>
                            <span style={{color: '#000', fontWeight: '500'}}>28.56 in</span>
                            <span className="display-none" style={{opacity: '0'}}>1</span>
                            <span className="display-none" style={{opacity: '0'}}>1</span>
                        </div>
                        <div className="item-temp">
                            <div className="inner-temp">
                                <div className="temp">
                                    <p>Tue</p>
                                    <ReactAnimatedWeather
                                        icon={'SLEET'}
                                        color={defaults.color}
                                        size={defaults.size}
                                        animate={defaults.animate}
                                    />
                                    <p>32°F</p>
                                </div>
                                <div className="temp">
                                    <p>Wed</p>
                                    <ReactAnimatedWeather
                                        icon={'CLEAR_DAY'}
                                        color={defaults.color}
                                        size={defaults.size}
                                        animate={defaults.animate}
                                    />
                                    <p>34°F</p>
                                </div>
                                <div className="temp">
                                    <p>Thu</p>
                                    <ReactAnimatedWeather
                                        icon={'PARTLY_CLOUDY_DAY'}
                                        color={defaults.color}
                                        size={defaults.size}
                                        animate={defaults.animate}
                                    />
                                    <p>31°F</p>
                                </div>
                            </div>
                            <div className="inner-temp">
                                <div className="temp">
                                    <p>Fri</p>
                                    <ReactAnimatedWeather
                                        icon={'CLOUDY'}
                                        color={defaults.color}
                                        size={defaults.size}
                                        animate={defaults.animate}
                                    />
                                    <p>32°F</p>
                                </div>
                                <div className="temp">
                                    <p>Sat</p>
                                    <ReactAnimatedWeather
                                        icon={'SNOW'}
                                        color={defaults.color}
                                        size={defaults.size}
                                        animate={defaults.animate}
                                    />
                                    <p>12°F</p>
                                </div>
                                <div className="temp">
                                    <p>Sun</p>
                                    <ReactAnimatedWeather
                                        icon={'WIND'}
                                        color={defaults.color}
                                        size={defaults.size}
                                        animate={defaults.animate}
                                    />
                                    <p>32°F</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}