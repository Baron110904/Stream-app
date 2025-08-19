import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Container>
      <Logo>
        <img src="https://i.postimg.cc/vm9TBgLL/30ab4406-30d8-477d-8669-2d5dd79b8eaa.png" alt=""/>  
      </Logo>
            
       <Menu>
           <StyledLink  to="/">Welcome</StyledLink >
           <StyledLink  to="/song">Song</StyledLink >
           <StyledLink  to="/about">About</StyledLink>
           <StyledLink  to="/log-in">Log in</StyledLink>
       </Menu>
       <RightMenu>
           <img src="https://i.postimg.cc/0QRKPKLt/chercher.png" alt=""/>
       </RightMenu>
    </Container>
  )
}

export default Navbar;


const Container = styled.div`
    display: flex;
    justify-content: center;
    min-height: 80px;
    position: fixed;
    z-index: 1000;
    align-items: center;
    padding: 0px 18%;
    top: 0;
    left: 0;
    right: 0;
    background-color: #28032b;
`

const Logo = styled.div`
    display: flex;
    margin-right: 40px;
    img {
        cursor: pointer;
    };
    height: 60px;
    width: 60px;
    border-radius: 10%;
    margin-left: 0px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
`

const StyledLink = styled(Link)`
  color: white;
  font-size: 16px;
  font-family: "Lato", sans-serif;
  padding: 0 10px;
  text-decoration: none;
  margin: 0 5px;

  &:hover {
    text-decoration-line: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: 30px;
    color: #e6107a;
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
    width: 35px;
    height: 35px;
    margin-right: 0px;

    img {
        width: 55%;
        height: 55%;
        cursor: pointer;
        margin-right: 0px;
    }
`
