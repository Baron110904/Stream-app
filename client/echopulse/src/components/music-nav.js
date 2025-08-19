import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Musnav = () => {
  return (
    <Container>
       <Menu>
           <StyledLink  to="/">Category</StyledLink >
           <StyledLink  to="/song">Format</StyledLink >
           <StyledLink  to="/about">Rank</StyledLink>
       </Menu>
       <RightMenu>
           <img src="https://i.postimg.cc/0QRKPKLt/chercher.png" alt=""/>
       </RightMenu>
    </Container>
  )
}

export default Musnav;


const Container = styled.div`
    display: flex;
    justify-content: center;
    min-height: 30px;
    position: fixed;
    z-index: 1000;
    align-items: center;
    padding: 0px 18%;
    background-color: #28032b;
    width: 25%;
    bottom: 440px;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
`

const StyledLink = styled(Link)`
  color: #e6107a;
  font-size: 16px;
  font-family: "Lato", sans-serif;
  padding: 0 10px;
  text-decoration: none;
  margin: 0 25px;

  &:hover {
    text-decoration-line: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 6px;
    color: #ffffff;
    font-weight: bold;
    cursor: pointer;
    transition: color 1s ease;
  }
`;


const RightMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    background-color: #91044a;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    margin-right: 0px;

    img {
        width: 55%;
        height: 55%;
        cursor: pointer;
        margin-right: 0px;
    }
`
