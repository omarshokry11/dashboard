import React from 'react';

export default function CustomTooltip (props, { active, payload, label }) {
    console.log(props)
    if (active) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`${label} : ${typeof payload !== "undefined" ? payload[0]?.value : ""}`}</p>
                <p className="intro">{label}</p>
                <p className="desc">Anything you want can be displayed here.</p>
            </div>
        );
    }

    return null;
};