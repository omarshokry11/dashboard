import React, {useEffect} from "react";
import Chart from "chart.js";

export default function BarChart() {
    useEffect(() => {
        let ctx = document.getElementById('myChart');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['0', '1', '2', '3', '4', '5', '6'],
                datasets: [
                    {
                        barPercentage: 13,
                        barThickness: 13,
                        maxBarThickness: 13,
                        minBarLength: 5,
                        data: [100, 200, 100, 300, 350, 450, 400],
                        backgroundColor: '#9788F2',
                    },
                    {
                        barPercentage: 13,
                        barThickness: 13,
                        maxBarThickness: 13,
                        minBarLength: 5,
                        data: [130, 100, 140, 200, 120, 200, 180],
                        backgroundColor: '#40B6FC',
                    },
                ]
            },
            options: {
                legend: {
                    display: false
                },
                responsive: true,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                tooltips: {
                    // Disable the on-canvas tooltip
                    enabled: true,
                }
            }
        });
    })

    return (
        <div id="chart">
            <canvas id="myChart" />
        </div>
    )
}