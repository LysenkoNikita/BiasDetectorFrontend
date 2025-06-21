import React, { useEffect, useState } from "react";
import FairnessBarChart from "./FairnessBarChart";
import AccuracyVsFairness from "./RadarComparisonChart";
import GroupFairnessChart from "./GroupFairnessChart";

const Dashboard = (metrics) => {
    const [data, setData] = useState(null);


    useEffect(() => {
        fetch("/results.json")
            .then(res => res.json())
            .then(setData);
    }, []);


    if (!metrics || !metrics.meta || !metrics.methods) {
        return null; // или можно рендерить <p>Загрузка...</p>
    }

    if (!data) return <p>Loading...</p>;

    return (
        <>
            <h2>Сравнение алгоритмов</h2>
            <FairnessBarChart methods={data.methods} />
            <AccuracyVsFairness methods={data.methods} />
            {data.meta.sensitive_attributes.map(attr => (
                <GroupFairnessChart
                    key={attr}
                    attr={attr}
                    groupFairness={data.group_fairness}
                />
            ))}
        </>
    );
};

export default Dashboard;
