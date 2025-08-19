import React from 'react';
import styled from 'styled-components';

const SongCard = ({img, title, artist, categorie, file}) => {
  return (
    <Container>
        <Picture>
            <img src={img} alt=""/>
        </Picture>
        <Rightsection>
                <h2>{title}</h2>
            <Downside>
                <h6>{artist}</h6>
                <p-div>
                    <p>{categorie}</p>
                    <p>{file}</p>
                    <play>
                        <img src='https://i.postimg.cc/CMr7dBst/bouton-jouer.png' alt=''/>
                    </play>
                </p-div>
            </Downside>
        </Rightsection>
    </Container>
  )
}

export default SongCard;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 410px;
    height: 150px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fdfdfdff;
`

const Picture = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 100px;
    border: 1px none #ccc;
    border-radius: 10%;
    overflow: hidden;
    position: relative;
    margin-left: 30px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const Rightsection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 70%;
    height: 100%;
    margin-left: 20px;
    margin-top: 5px;

    h2 {
        font-size: 1.2rem;
        color: #91044a;
        margin: 5px;
        margin-left: 10px;
    }
`

const Downside = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-left: 10px;

    p{
        display: flex;
        justify-content: space-between;
        margin: 10px 10px;
        margin-left: 0px;
        font-size: 0.8rem;
        color: #000000;
    }

    h6 {
        font-size: 1rem;
        font-weight: 600;
        color: #000000ff;
        margin: 8px 0px;
        cursor: pointer;
    }

    p-div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        play {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 25px;
            width: 25px;
            margin-left: 90px;
            color: #ffffffff;
            border: 16px none #91044a;
            border-radius: 50%;
            background-color: #91044a;
            cursor: pointer;
        }
        img{
            height: 13px;
            width: 13px;
        }
    }
`