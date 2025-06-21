import React from 'react';
import classes from "./FileUpload.module.css";

const FileUpload = ({ onFileChange, selectedFile }) => {
    return (
        <div className={classes['file-upload-container']}>
            <input
                id="file-upload"
                type="file"
                accept=".csv,.xlsx,.xls,.txt"
                onChange={onFileChange}
                className={classes['file-upload-input']}
            />
            <label htmlFor="file-upload" className={classes['file-upload-label']}>
                <div className={classes['upload-content']}>
                    <svg className={classes['upload-icon']} viewBox="0 0 24 24">
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                    </svg>
                    <span className={classes['upload-text']}>
                        {selectedFile ? selectedFile.name : 'Выберите или перетащите файл'}
                    </span>
                    <span className={classes['upload-hint']}>(CSV, Excel, TXT)</span>
                </div>
            </label>
        </div>
    );
};

export default FileUpload;