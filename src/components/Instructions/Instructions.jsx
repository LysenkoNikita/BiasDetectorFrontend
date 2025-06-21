import React from "react";

const Instructions = () => {
    return (
        <section style={{ padding: "1rem 2rem", backgroundColor: "#f4f4f4", borderRadius: "8px", marginBottom: "2rem" }}>
            <h2>📘 Инструкция по использованию</h2>
            <ol style={{ lineHeight: "1.6", paddingLeft: "1.2rem" }}>
                <li>
                    <strong>Загрузите CSV-файл</strong> с данными. Поддерживаются файлы с заголовками и структурой таблицы.
                </li>
                <li>
                    <strong>Укажите целевую переменную</strong> — это колонка, которую вы хотите предсказать
                    (например, <code>promoted</code>, <code>loan_approved</code> или <code>Spending Score</code>).
                </li>
                <li>
                    <strong>Укажите чувствительный признак</strong> — это колонка, по которой может проявляться предвзятость
                    (например, <code>gender</code>, <code>age</code>, <code>ethnicity</code> и т.п.).
                </li>
                <li>
                    Нажмите <strong>“Анализировать”</strong>. Модель автоматически применит методы устранения предвзятости,
                    рассчитает метрики и выберет наилучший вариант.
                </li>
                <li>
                    Ниже отобразится <strong>JSON-отчёт</strong> с результатами, включая:
                    <ul>
                        <li>Disparate Impact (DI)</li>
                        <li>Statistical Parity Difference (SPD)</li>
                        <li>Equal Opportunity Difference (EOD)</li>
                        <li>Точность модели и итоговый балл</li>
                    </ul>
                </li>
                <li>
                    По завершению будет доступен <strong>дебиаснутый CSV-файл</strong> (если реализована возможность скачивания).
                </li>
            </ol>
        </section>
    );
};

export default Instructions;
