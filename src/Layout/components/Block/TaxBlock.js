import React  from "react";
import {BarChart, Bar} from "recharts";
import "./style/TaxBlock.scss";

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


export default function TaxBlock(){
    return(
        <div className="tax-box">
            <div className="tax-title">
                <h5>Tax Deduction</h5>
            </div>
            <div className="main-tax">
                <div className="item">
                    <div className="tax-salary">
                        <h1>$347</h1>
                        <p>APRIL 2017</p>
                        <b>(150 Sales)</b>
                    </div>
                </div>
                <div className="item-chart">
                    <BarChart width={90} height={100} data={data} barSize={3}>
                        <Bar dataKey="uv" fill="#009efb" />
                    </BarChart>
                </div>
            </div>
        </div>
    )
}