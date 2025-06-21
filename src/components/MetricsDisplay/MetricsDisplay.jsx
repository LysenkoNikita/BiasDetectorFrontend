import React from "react";

const MetricsDisplay = ({ metrics }) => {
    const {
        original_disparate_impact,
        accuracy_before,
        accuracy_after,
        fairness_before,
        fairness_after,
        methods,
        meta,
        group_fairness
    } = metrics;

    return (
        <div style={{ background: "#f9f9f9", padding: "1.5rem", borderRadius: "10px" }}>
            <h2>📊 Общие метрики</h2>
            <p><strong>🎯 Целевая метка:</strong> {metrics?.meta?.target}</p>
            <p><strong>🛡 Чувствительные признаки:</strong> {metrics?.meta?.sensitive_attributes?.join(', ')}</p>
            <p><strong>✅ Лучший метод:</strong> {meta.best_method}</p>

            <h3>📌 Accuracy</h3>
            <ul>
                <li>До коррекции: {accuracy_before}</li>
                <li>После коррекции: {accuracy_after}</li>
            </ul>

            <h3>⚖️ Fairness до и после:</h3>
            <ul>
                {Object.entries(fairness_before || {}).map(([k, v]) => (
                    <li key={k}><strong>{k} до:</strong> {v} — <strong>после:</strong> {fairness_after?.[k]}</li>
                ))}
            </ul>

            {group_fairness && (
                <>
                    <h3>📚 Групповая справедливость:</h3>
                    {Object.entries(group_fairness).map(([attr, group]) => (
                        <div key={attr}>
                            <h4>{attr}</h4>
                            <p><strong>DI до:</strong> {group.original.DI}, <strong>SPD до:</strong> {group.original.SPD}</p>
                            {Object.entries(group.transformed).map(([methodName, values]) => (
                                <p key={methodName}>
                                    <strong>{methodName}</strong>: DI={values.DI}, SPD={values.SPD}
                                </p>
                            ))}
                        </div>
                    ))}
                </>
            )}

            <h3>📈 Сравнение методов:</h3>
            {methods && methods.map((method, idx) => (
                <div key={idx} style={{ marginTop: "1rem" }}>
                    <strong>{method.name}</strong>
                    <ul>
                        <li>Accuracy: {method.accuracy}</li>
                        <li>Fairness Score: {method.fairness_score}</li>
                        <li>Combined Score: {method.combined_score}</li>
                        {method.fairness && Object.entries(method.fairness).map(([k, v]) => (
                            <li key={k}>{k}: {v}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default MetricsDisplay;