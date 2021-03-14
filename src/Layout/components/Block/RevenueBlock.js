import React from "react";
import {BarChart, Bar} from "recharts";
import "./style/RevenueBlock.scss";

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

export default function RevenueBlock(){
    return(
        <div className="revenue-box">
            <div className="revenue-title">
                <h5>Revenue generate</h5>
            </div>
            <div className="main-revenue">
                <div className="item">
                    <div className="revenue-salary">
                        <h1>$647</h1>
                        <p>APRIL 2017</p>
                        <b>(150 Sales)</b>
                    </div>
                </div>
                <div className="item-chart">
                    <BarChart width={90} height={100} data={data} barSize={3}>
                        <Bar dataKey="uv" fill="#f62d51" />
                    </BarChart>
                </div>
            </div>
        </div>
    )
}