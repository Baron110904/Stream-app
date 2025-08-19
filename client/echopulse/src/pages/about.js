import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/navbar';

const About = () => {
  return (
    <Container>
        <Navbar />
        <Boutcomp>
            <h1>About Us</h1>
            <p>Welcome to EchoPulse, your ultimate destination for discovering and sharing music. Our platform connects music lovers from around the world, allowing you to explore new genres, share your favorite tracks, and connect with artists.</p>
            <p>At EchoPulse, we believe in the power of music to bring people together. Whether you're a casual listener or a passionate musician, our community is here to support you. Join us in celebrating the diverse world of music and let your voice be heard.</p>
            <p>Thank you for being a part of our journey. Together, let's create a vibrant musical community that resonates with every beat.</p>
        </Boutcomp>
    </Container>
  )
}

export default About;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-image: url('https://i.postimg.cc/WzPwzp7f/SL-022222-48740-05.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100%;
`

const Boutcomp = styled.div`
    display: flex;
    justify-content: center;
    let-align: center;
    flex-direction: column;
    background-color: rgba(105, 70, 92, 0.5);
    width: 50%;
    height: 100vh;
    padding: 0px 80px;

    h1 {
        font-size: 3rem;
        color: #bd2c74ff;
        margin-bottom: 20px;
    }

    p {
        font-size: 1rem;
        font-weight: 300;
        color: #ffffff;
        line-height: 1.3;
    }
`

