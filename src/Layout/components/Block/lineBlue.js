import React, { PureComponent } from 'react';
import {LineChart, Line} from 'recharts';

const data = [
    {
        name: '2012', uv: 50, pv: 60, amt: 60,
    },
    {
        name: '2013', uv: 600, pv: 560, amt: 560,
    },
    {
        name: '2014', uv: 160, pv: 170, amt: 170,
    },
    {
        name: '2015', uv: 300, pv: 310, amt: 310,
    },
    {
        name: '2016', uv: 130, pv: 140, amt: 140,
    },
    {
        name: '2017', uv: 180, pv: 190, amt: 190,
    },
];

export default class LineBlue extends PureComponent {

    render() {
        return (
            <LineChart width={170} height={110} data={data}>
                <Line type="monotone" dataKey="pv" stroke="#009EFB" strokeWidth={3} />
            </LineChart>
        );
    }
}