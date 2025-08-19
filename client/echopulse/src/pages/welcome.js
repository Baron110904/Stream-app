// import React, { useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../components/navbar';
import Button from '../components/button';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {

    const getItemWithExpiry = (key) => {
        const itemStr = localStorage.getItem(key);
        if (!itemStr) return null;

        const item = JSON.parse(itemStr);
        const now = new Date();

        if (now.getTime() > item.expiry) {
            localStorage.removeItem(key);
            return null;
        }
        return item.value;
    };

    const navigate = useNavigate();
    
    const isAuthenticated = getItemWithExpiry("isAuthenticated");

    // const IS_DEV = false;

    // useEffect(() => {
    //     // if (IS_DEV) return;

    //     const auth = getItemWithExpiry("isAuthenticated");

    //     if(!auth){
    //         console.log("Session expirée !");
    //         navigate("/login");
    //     }
    // }, [navigate]);

    const handleButtonClick = () => {
        if (isAuthenticated) {
            navigate('/add-song');
        } else {
            navigate('/sign-in');
        }
    };

    const isAdmin = getItemWithExpiry("isAdmin");

    const handleDashboardClick = () => {
        // if (isAdmin) {
        navigate('/dash');
        // } else {
            // navigate('/log-in');
        // }
    };

    return (
        <Container>
            <Navbar />
            <WelcomeSection>
                <Leftcontent>
                    <h3>Écoute la musique autrement</h3>
                    <p>Explore, ressens, vibres, plonge dans un univers où chaque note raconte une histoire. EchoPulse, c’est plus que de la musique : c’est une expérience sonore, vivante et unique.</p>
                    <Btn>
                        <Button text = { 'Listen  ->' }/>
                        {/* {IS_DEV || */ (isAuthenticated) && (<Button text = { 'Add Song  ->' } onClick={handleButtonClick}/>)}
                        <Button text = { 'Dashboard  ->' } onClick={handleDashboardClick}/>
                    </Btn>
                </Leftcontent>
                <Rightcontent>
                    <img src="https://i.postimg.cc/4N26TLg9/8588687.png" alt="" />
                </Rightcontent>
            </WelcomeSection>
        </Container>
    )
};

export default Welcome;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`
const WelcomeSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin-top: 45px;
    color: #ffffff
`

const Leftcontent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-start: left;
    padding: 20px;
    width: 50%;
    margin-left: 50px;
    padding-right: 120px;

    h3 {
        font-size: 2.5rem;
        margin-bottom: 5px;
    }

    p {
        font-size: 1rem;
        font-weight: 300;
        margin-bottom: 40px;
    }
`

const Btn = styled.div`
    dsiplay: flex;
    align-items: center;
    justify-content: space-between;

    Button {
        display: flex;
        align-itmes: center;
        justify-content: center; 
    }
`

const Rightcontent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;

    img {
        width: 600px;
        height: 600px;
    }
`