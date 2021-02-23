import React from "react";
import {BarChart, Bar} from "recharts";
import "./style/orderBlock.scss";

const data = [
    {
        name: '6', uv: 2, pv: 2, amt: 2,
    },
    {
        name: '10', uv: 40, pv: 40, amt: 40,
    },
    {
        name: '9', uv: 30, pv: 30, amt: 30,
    },
    {
        name: '11', uv: 70, pv: 70, amt: 70,
    },
    {
        name: '9', uv: 50, pv: 50, amt: 50,
    },
    {
        name: '10', uv: 60, pv: 60, amt: 60,
    },
    {
        name: '12', uv: 80, pv: 80, amt: 80,
    },
];

export default function OrderBlock(){
    return(
        <div className="order-box">
            <div className="order-title">
                <h5>Order received</h5>
            </div>
            <div className="main-order">
                <div className="item">
                    <div className="order-salary">
                        <h1>$647</h1>
                        <p>APRIL 2017</p>
                        <b>(150 Sales)</b>
                    </div>
                </div>
                <div className="item-chart">
                    <BarChart width={90} height={100} data={data} barSize={3}>
                        <Bar dataKey="uv" fill="#7A8081" />
                    </BarChart>
                </div>
            </div>
        </div>
    )
}