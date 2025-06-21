import React from 'react';
import classes from './Header.module.css';

const Header = ({ title }) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <header className={classes.header}>
            <div className={classes['header-content']}>
                <button
                    onClick={scrollToTop}
                    className={classes['top-button']}
                    aria-label="Scroll to top"
                >
                    {<h4>{title}</h4>}
                </button>
            </div>
            <hr className={classes['header-line']} />
        </header>
    );
};

export default Header;