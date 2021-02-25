import React, {useEffect} from "react";
import "./style/ShipBlock.scss";
import Chart from "chart.js";

export default function ShipBlock(){

    useEffect(() => {
        let ctx = document.getElementById('pieChart');
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: [
                    '30',
                    '20',
                    '40'
                ],
                datasets: [{
                    data: [33.3, 22.2, 44.4],
                    backgroundColor: [
                        "#F8F8F8",
                        "#000000",
                        "#76D2C2",
                    ],
                }]
            },
            options: {
                legend: {
                    display: false
                },
                responsive: true,
            }
        });
    })

    return(
        <div className="ship-box">
            <div className="ship-title">
                <h5>Shipment</h5>
            </div>
            <div className="main-ship">
                <div className="item">
                    <div className="ship-salary">
                        <h1>$647</h1>
                        <p>APRIL 2017</p>
                        <b>(150 Sales)</b>
                    </div>
                </div>
                <div className="item-chart">
                    <canvas id="pieChart" />
                </div>
            </div>
        </div>
    )
}