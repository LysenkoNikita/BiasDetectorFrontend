import React from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    PointElement,
    LineElement,
    LinearScale,
    Title,
    Tooltip,
    Legend
} from "chart.js";

// 📌 Регистрируем необходимые компоненты Chart.js
ChartJS.register(
    PointElement,
    LineElement,
    LinearScale,
    Title,
    Tooltip,
    Legend
);

const FairnessBarChart = ({ methods }) => {
    const labels = methods.map(m => m.name);

    const data = {
        labels,
        datasets: [
            {
                label: "Accuracy",
                data: methods.map(m => m.accuracy),
                backgroundColor: "#4caf50"
            },
            {
                label: "Fairness Score",
                data: methods.map(m => m.fairness_score),
                backgroundColor: "#2196f3"
            },
            {
                label: "Combined Score",
                data: methods.map(m => m.combined_score),
                backgroundColor: "#ff9800"
            }
        ]
    };

    return <Bar data={data} />;
};

export default FairnessBarChart;
