import React from 'react';
import classes from "./InputForm.module.css";

const InputForm = ({ inputs, onInputChange, alpha, setAlpha }) => {
    return (
        <div className={classes['input-form-container']}>
            {inputs.map((input, index) => (
                <div key={index} className={classes['input-group']}>
                    <label htmlFor={`input-${index}`} className={classes['input-label']}>
                        {input.label}
                    </label>
                    <input
                        id={`input-${index}`}
                        type="text"
                        value={input.value}
                        onChange={(e) => onInputChange(index, e.target.value)}
                        className={classes['input-field']}
                        placeholder={input.placeholder}
                    />
                </div>
            ))}

            <div className={classes['input-group']}>
                <label htmlFor="alpha-input" className={classes['input-label']}>
                    Веса (α) между Accuracy и Fairness (0.0–1.0)
                </label>
                <input
                    id="alpha-input"
                    type="number"
                    min="0"
                    max="1"
                    step="0.01"
                    value={alpha}
                    onChange={(e) => setAlpha(parseFloat(e.target.value))}
                    className={classes['input-field']}
                    placeholder="Например: 0.5"
                />
            </div>
        </div>
    );
};

export default InputForm;
