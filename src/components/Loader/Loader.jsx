import React from "react";

const Loader = ({ message = "Загрузка..." }) => (
    <div style={{ textAlign: "center", padding: "2rem" }}>
        <div className="spinner" />
        <p>{message}</p>
    </div>
);

export default Loader;
