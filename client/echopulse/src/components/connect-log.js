import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import Button from './button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Connectjs = () => {

   const [formData, setFormData] = useState({
    username: '',
    password: ''
   });

   const [message, setMessage] = useState("");
   const navigate = useNavigate();

   const setItemWithExpiry = (key, value, ttl) => {
     const now = new Date();
   
     const item = {
       value: value,
       expiry: now.getTime() + ttl,
     };
   
     localStorage.setItem(key, JSON.stringify(item));
   };

   const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value}))
   };

   const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const res = await axios.post("/log-in", formData);
        console.log("Backend answer :", res.data);
        setMessage("Successfully Login");
        setItemWithExpiry("token", res.data.token, 60*60*1000);
        setItemWithExpiry("isAuthenticated", true, 60*60*1000);
        navigate('/');
        setFormData({
            username: "",
            password: "",
        });
    } catch (error) {
        if (error.response && error.response.data && error.response.data.error) {
            setMessage(error.response.data.error);  
        } else {
            setMessage("An error occurred");
        }
    } finally {
        setTimeout(() => setMessage(""), 3000);
    }
   };

  return (
    <Container>
        <h4>Login</h4>
        <form onSubmit={handleSubmit}>
            <input name='username' type='text' placeholder='Username' value={formData.username} onChange={handleChange} required/>
            <input name='password' type='password' placeholder='Password' value={formData.password} onChange={handleChange} required/>
            <Button type="submit" text={'Login'}/>
        </form>
        <p>
            {message}
        </p>
    </Container>
  )
};

export default Connectjs;

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 1px none #ccc;
    padding: 5px;
    border-radius: 15px;
    width: 280px;
    height: 350px;
    background-color: #ffffff;
    

    h4 {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        color: #91044a;
        font-weight: 600;
    }

    input {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 95%;
        padding: 5px 10px;
        margin-bottom: 40px;
        outline: none;
        border: 1px none #91044a;
        border-bottom: 1px solid #91044a;
        font-size: 1rem;
        font-weight: 300;
    }

    input:focus {
        outline: none;
        border-bottom: 2px solid #e6107a; /* ou n'importe quelle couleur */
    }

    form {
        margin-bottom: 20px;
    }

    p{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.9rem;
        font-weight: 600;
        color: #91044a;
    }
`



// .card-login {
//   background-color: rgba(255, 255, 255, 0.1); /* léger blanc transparent */
//   border-radius: 10px;
//   padding: 2rem;
//   backdrop-filter: blur(10px); /* optionnel pour un effet "verre" */
//   -webkit-backdrop-filter: blur(10px); /* pour Safari */
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
//   color: white;
// }
