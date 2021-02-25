import React from "react";
import "./style/LineChartBlock.scss";

import LineRed from "./LineRed.js";
import LineYallow from "./LineYallow.js";
import LineGreen from "./LineGreen.js";
import LineBlue from "./LineBlue.js";

export default function LineChartBlock(){
    return(
        <div className="line-chart-box">
            <div className="line-box margin-bottom">
                <div style={{borderBottom: '4px solid #F62D51'}}>
                    <h5>485</h5>
                    <p>All Sales</p>
                    <div className="line-red">
                        <LineRed />
                    </div>
                </div>
                <div style={{borderBottom: '4px solid #FFBC34'}}>
                     <h5>185</h5>
                    <p>All Orders</p>
                    <div className="line-yallow">
                        <LineYallow />
                    </div>
                </div>
            </div>
            <div className="line-box">
                <div style={{borderBottom: '4px solid #36BEA6'}}>
                     <h5>45</h5>
                    <p>All Transactions</p>
                    <div className="line-green">
                        <LineGreen />
                    </div>
                </div>
                <div style={{borderBottom: '4px solid #009EFB'}}>
                     <h5>655</h5>
                    <p>All Costs</p>
                    <div className="line-blue">
                        <LineBlue />
                    </div>
                </div>
            </div>
        </div>
    )
}