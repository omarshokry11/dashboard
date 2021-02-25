import React, { PureComponent } from 'react';
import {LineChart, Line} from 'recharts';

const data = [
    {
        name: '2012', uv: 300, pv: 330, amt: 330,
    },
    {
        name: '2013', uv: 600, pv: 560, amt: 560,
    },
    {
        name: '2014', uv: 100, pv: 110, amt: 110,
    },
    {
        name: '2015', uv: 150, pv: 160, amt: 160,
    },
    {
        name: '2016', uv: 130, pv: 140, amt: 140,
    },
    {
        name: '2017', uv: 140, pv: 150, amt: 150,
    },
];

export default class LineRed extends PureComponent {

    render() {
        return (
            <LineChart width={170} height={110} data={data}>
                <Line type="monotone" dataKey="pv" stroke="#F62D51" strokeWidth={3} />
            </LineChart>
        );
    }
}