import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={classes.footer}>
            <div className={classes['footer-bottom']}>
                <p className={classes.copyright}>
                    &copy; {currentYear} Bias Detector. Все права защищены.
                </p>
                <div className={classes['legal-links']}>
                    <a href="/privacy" className={classes['legal-link']}>Политика конфиденциальности</a>
                    <a href="/terms" className={classes['legal-link']}>Условия использования</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;