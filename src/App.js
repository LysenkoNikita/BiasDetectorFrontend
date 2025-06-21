import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MainContent from "./components/Layout/MainContent";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Instructions from "./components/Instructions/Instructions";
import DataInputBlock from "./components/DataInputBlock/DataInputBlock";
import Loader from "./components/Loader/Loader";

// Графики
import RadarComparisonChart from "./components/Graphics/RadarComparisonChart";
import FairnessBarChart from "./components/Graphics/FairnessBarChart";
import GroupFairnessChart from "./components/Graphics/GroupFairnessChart";
import MyButton from "./components/Button/MyButton";
import MetricsDisplay from "./components/MetricsDisplay/MetricsDisplay";


const App = () => {
    const [inputs, setInputs] = useState([
        { label: "Целевая переменная", value: "", placeholder: "например: hired" },
        { label: "Чувствительные признаки (через запятую)", value: "", placeholder: "например: gender,age" }
    ]);

    const [alpha, setAlpha] = useState(0.5);
    const [file, setFile] = useState(null);
    const [status, setStatus] = useState('idle');
    const [metrics, setMetrics] = useState(null);

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('target_column', inputs[0].value);

        // Преобразуем чувствительные признаки в массив
        const sensitiveList = inputs[1].value
            .split(',')
            .map(v => v.trim())
            .filter(Boolean);

        sensitiveList.forEach(attr => formData.append('sensitive_columns', attr));
        formData.append('alpha', alpha);

        setStatus('loading');

        try {
            const response = await axios.post('http://localhost:8000/analyze', formData);
            setMetrics(response.data); // 🔥 ничего не парсим, axios уже сделал это
            setStatus('done');
        } catch (err) {
            console.error(err);
            alert('❌ Ошибка при анализе: ' + err.message);
            setStatus('idle');
        }
    };

    const handleReset = () => {
        setMetrics(null);
        setStatus('idle');
        setFile(null);
        setAlpha(0.5);
        setInputs(inputs.map(i => ({ ...i, value: "" })));
    };

    useEffect(() => {
        console.log('📊 Метрики получены:', metrics);
    }, [metrics]);

    return (
        <div className="container">
            <Header title="Bias Detector" />

            <MainContent>
                {status === "idle" && (
                    <>
                        <Instructions />
                        <DataInputBlock
                            file={file}
                            onFileChange={e => setFile(e.target.files[0])}
                            inputs={inputs}
                            onInputChange={(index, value) => {
                            const updated = [...inputs];
                            updated[index].value = value;
                            setInputs(updated);
                        }}
                            onSubmit={handleSubmit}
                            alpha={alpha}
                            setAlpha={setAlpha}
                            />
                    </>
                )}

                {status === "loading" && <Loader />}

                {status === "done" && metrics && (
                    <>
                        <h2 style={{ textAlign: "center", marginBottom: 30 }}>
                            📊 Результаты анализа
                        </h2>

                        <MetricsDisplay metrics={metrics} />

                        <FairnessBarChart methods={metrics.methods} />
                        <RadarComparisonChart methods={metrics.methods} />

                        {metrics.meta.sensitive_attributes.map(attr => (
                            <GroupFairnessChart
                                key={attr}
                                attr={attr}
                                groupFairness={metrics.group_fairness}
                            />
                        ))}

                        <div className="actions" style={{ marginTop: 30, textAlign: "center" }}>
                            <MyButton href="http://localhost:8000/download" className="btn btn-primary" download>
                                📥 Скачать скорректированный CSV
                            </MyButton>
                            <MyButton className="btn btn-secondary" onClick={handleReset}>
                                🔁 Новый анализ
                            </MyButton>
                        </div>
                    </>
                )}
            </MainContent>

            <Footer />

        </div>
    );
};

export default App;
