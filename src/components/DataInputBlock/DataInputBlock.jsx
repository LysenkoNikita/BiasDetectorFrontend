import React from "react";
import FileUpload from "../FileUpload/FileUpload";
import InputForm from "../InputForm/InputForm";
import MyButton from "../Button/MyButton";

const DataInputBlock = ({ file, onFileChange, inputs, onInputChange, onSubmit, alpha, setAlpha }) => {
    return (
        <div>
            <FileUpload onFileChange={onFileChange} selectedFile={file} />
            <InputForm
                inputs={inputs}
                onInputChange={onInputChange}
                alpha={alpha}
                setAlpha={setAlpha}
            />
            <MyButton onClick={onSubmit}>Анализировать</MyButton>
        </div>
    );
};

export default DataInputBlock;
