import React from 'react';
import Navbar from '../components/navbar';
import styled from 'styled-components';
import Connect from '../components/connect';

const Sign = () => {
  return (
    <Container className="page">
        <Navbar />
        <SignSection>
            <Leftsection  className="white-panel">
                <img src="https://i.postimg.cc/zGhwb7kM/Calque-2.png" alt=""/>
            </Leftsection>
            <Rightsection className="right-panel">
                <Connect />
            </Rightsection>
        </SignSection>
    </Container>
  )
};

export default Sign; 

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const SignSection = styled.div`
    display: flex;
    justify-content: space-between;
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
        object-fit: contain;
        width: 60%;
    }
`

const Rightsection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%    
    height: 100%;
`