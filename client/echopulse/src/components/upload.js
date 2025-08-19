import React, { useRef} from 'react';
import styled from 'styled-components';

const Uploads = ({ onFileSelect }) => {
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && onFileSelect) {
            console.log('Selected file:', file.name);
            onFileSelect(file);
        }
    };

    const handleClick = () => {
        fileInputRef.current.click();
    }

    return (
        <Upload onClick={handleClick}>
            <input
                type="file"
                accept="audio/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: 'none' }}
            />
            <img src="https://i.postimg.cc/v8rpg6nk/telechargement-dans-le-nuage.png" alt="Upload Icon" />
            <p>Upload your audio file</p>
        </Upload>
    )
};

export default Uploads;

const Upload = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 150px;
    height: 50px;
    margin: 5px;
    padding: 10px;
    border: 2px dashed #91044a;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0 6px 20px rgba(160, 24, 126, 0.1); 
    background-color: #f0f0f0ff;

    img {
        height: 20px;
        width: 20px;
        margin-top: 2px;
    }

    &:hover {
        box-shadow: 0 8px 30px rgba(160, 24, 126, 0.15);
    }

    p{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 0.8rem;
    }
`
