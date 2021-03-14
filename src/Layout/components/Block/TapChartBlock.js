import React from "react";
import "./style/TapChartBlock.scss";

import BarChartBlock from "./BarChartBlock";

export default function TapChartBlock(){
    return(
        <div className="tap-chart-box">
            <div className="main-tap-chart">
                <h5>Daily Income</h5>
                <div className="select">
                    <select>
                        <option>Today</option>
                        <option>Tomorrow</option>
                    </select>
                </div>
            </div>
            <div className="bar-chart-block">
                <BarChartBlock />
            </div>
        </div>
    )
}