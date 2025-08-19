import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import Button from './button';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const PassFg = () => {

   const [adresse, setAdresse] = useState("");
   const [message, setMessage] = useState("");
   const [loading, setLoading] = useState(false);

   
//    const navigate = useNavigate();

   const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
        const res = axios.post('/forgot-password', {adresse});
        console.log("Backend answer :", res.data);
        setMessage("Mail sent successfully");
        setTimeout(() => {setMessage("")}, 5000); 
    } catch (error) {
        if (error.response && error.response.data && error.response.data.error) {
            setMessage(error.response.data.error);  
        } else {
            setMessage("An error occurred");
        }

    };
    setLoading(false);
    
   };

    return (
      <Container>
          <h4>Enter your recup mail</h4>
          <form onSubmit={handleSubmit}>
              <input name='adresse' type='email' placeholder='Your email' value={adresse} onChange={ (e) => setAdresse(e.target.value)} required/>
              <Button type="submit" text={'Update'}/>
                {loading && <span>Loading...</span>}
          </form>
          <p>
              {message}
          </p>
      </Container>
    )
};

export default PassFg;

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
        margin-bottom: 20px;
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

    p {
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
