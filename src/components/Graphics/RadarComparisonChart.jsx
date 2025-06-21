import React from "react";
import { Radar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    Title
} from "chart.js";

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    Title
);

const RadarComparisonChart = ({ methods }) => {
    const labels = ["Accuracy", "Fairness Score", "Combined Score"];

    const data = {
        labels,
        datasets: methods.map((method, idx) => ({
            label: method.name,
            data: [
                method.accuracy ?? 0,
                method.fairness_score ?? 0,
                method.combined_score ?? 0
            ],
            backgroundColor: `rgba(${80 + idx * 50}, ${100 + idx * 30}, 200, 0.2)`,
            borderColor: `rgba(${80 + idx * 50}, ${100 + idx * 30}, 200, 1)`,
            borderWidth: 2,
            fill: true,
            pointRadius: 3
        }))
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { position: "top" },
            title: {
                display: true,
                text: "📈 Radar Comparison: Accuracy vs Fairness vs Combined"
            }
        },
        scales: {
            r: {
                min: 0,
                max: 1,
                ticks: {
                    stepSize: 0.2
                },
                pointLabels: {
                    font: { size: 14 }
                }
            }
        }
    };

    return <Radar data={data} options={options} />;
};

export default RadarComparisonChart;
