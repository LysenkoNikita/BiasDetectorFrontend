import React from "react";
import styles from "./MailContent.module.css";

const MainContent = ({ children }) => {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                {children}
            </div>
        </main>
    );
};

export default MainContent;
