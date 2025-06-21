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

const GroupFairnessChart = ({ groupFairness, attr }) => {
    const transformed = groupFairness[attr].transformed;

    const labels = Object.keys(transformed);
    const original = groupFairness[attr].original;

    const data = {
        labels,
        datasets: [
            {
                label: "DI",
                data: labels.map(m => transformed[m].DI),
                backgroundColor: "#03a9f4"
            },
            {
                label: "SPD",
                data: labels.map(m => transformed[m].SPD),
                backgroundColor: "#e91e63"
            }
        ]
    };

    return (
        <div>
            <h3>Fairness по признаку: {attr} (original DI: {original.DI}, SPD: {original.SPD})</h3>
            <Bar data={data} />
        </div>
    );
};

export default GroupFairnessChart;
