import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Button from '../components/button';

const ResetPw = () =>{
    const { token } = useParams();
    console.log("Token récupéré :", token); 
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`/reset-pw/${token}`, {password});
            console.log("Backend answer :", res.data);
            setMessage(res.data.message || 'Password reset successful');
        } catch (error) {
            if (error.response && error.response.data && error.response.data.error) {
                setMessage(error.response.data.error);  
            } else {
                setMessage("An error occurred");
            }
        }
    };


  return (
    <Container>
        <h2>New Password</h2>
        <form onSubmit={handleSubmit}>
            <input type="password" placeholder='New password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <Button type="submit" text={'Reset password'}/>
        </form>
        <p>{message}</p>
    </Container>
  )
};

export default ResetPw;

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 1px none #ccc;
    padding: 2rem;
    border-radius: 15px;
    width: 280px;
    height: 350px;
    background-color: #ffffff;

    h2 {
        margin-bottom: 1rem;
    }

    input {
        margin-bottom: 1rem;
        padding: 0.5rem;
        width: 100%;
        border-radius: 5px;
        border: 1px solid #ccc;
    }
`