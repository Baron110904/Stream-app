import React from 'react'
import styled from 'styled-components';

const Button = ({text, type = "button", onClick }) => {
  return (
    <Btn as="button" type={type} onClick={onClick}>{text}</Btn>
  )
}

export default Button;

const Btn = styled.div`
    width: fit-content;
    background: linear-gradient(185deg, #91044a, #610868ff);
    color: white;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
    text-align: center;
    transition: background-color 0.3s ease;
    font-size: 1rem;
    font-weight: 300;
    
    &:hover {
        background: linear-gradient(185deg, #d50c6f, #4b16a0ff);
        transition: color 0.55s ease-in-out;
        transform: scale(1.05)
    }
`