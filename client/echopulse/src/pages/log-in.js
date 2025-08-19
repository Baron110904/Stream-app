import React from 'react';
import Navbar from '../components/navbar';
import styled from 'styled-components';
import Connectjs from '../components/connect-log';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
  return (
    <Container className="page">
        <Navbar />
        <SignSection>
            <Leftsection  className="white-panel">
                <img src="https://i.postimg.cc/6Q1r4cM4/10030603.png" alt=""/>
            </Leftsection>
            <Rightsection className="right-panel">
                <Connectjs />
                    <p>You don't have an account? <em><a href="/sign-in">Sign up</a></em></p>
                    <p 
                        style={{ color: "blue", cursor:"pointer"}}
                        onClick={() => navigate('/forgot-password')}
                    >
                        Password forgotten ?
                    </p>
            </Rightsection>
        </SignSection>
    </Container>
  )
};

export default Login; 

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const SignSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 20px;
`

const Leftsection = styled.div`
    display: flex;
    justify-content: space-between;
    flex-start: left;
    height: 100%;
    width: 100%;
    margin-left: 0px;
    margin-top: 180px;

    img {
        height: 100%;
        width: 60%;
        object-fit: cover;
    }
`

const Rightsection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%    
    height: 100%;
    
    p {
        color: #ffffff;
    }
`