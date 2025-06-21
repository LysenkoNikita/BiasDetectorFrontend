import React from 'react';
import classes from "./MyButton.module.css";

const SubmitButton = ({ isLoading, onClick, children }) => {
    return (
        <button
            className={`${classes['submit-button']} ${isLoading ? classes.loading : ''}`}
            onClick={onClick}
            disabled={isLoading}
        >
            {isLoading ? (
                <>
                    <span className={classes.spinner}></span>
                    Отправка...
                </>
            ) : (
                children
            )}
        </button>
    );
};

export default SubmitButton;