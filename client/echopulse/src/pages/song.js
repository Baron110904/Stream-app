import React, { useEffect } from 'react';
import Navbar from '../components/navbar';
import Musnav from '../components/music-nav';
import styled from 'styled-components';
import SongCard from '../components/song-card';
import { useState } from 'react';
import axios from 'axios';

const Song = () => {

  const [songs, setSongs] = useState([]);
  
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const res = await axios.get('/song');
        setSongs(res.data)
      } catch (error) {
        console.error("Erreur lors du chargement des chansons :", error);
      }
    };

    fetchSongs();
  }, []);

  return (
    <Container>
      <Navbar />
      <Head/>
      <Musnav/>
      <Mysong>
        <SongList>
          {songs.map((song) => (
            <SongCard img ={song.cover} title={song.titre} artist={song.user_id} categorie={song.categorie} file={song.format}/>
          ))}
        </SongList>
      </Mysong>
    </Container>
  )
};

export default Song;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    background-image: url('https://i.postimg.cc/WzPwzp7f/SL-022222-48740-05.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    // filter: blur(2px); 
    min-height: 100vh;
    overflow: auto;
    z-index: 0;
    width: 100%;
`


const Head = styled.div`
    display: flex;
    justify-content: start;
    align-items: flex-start;
    align-content: flex-start;
    position: fixed;
    background-image: url('https://i.postimg.cc/T1hJLxYv/Calque-1.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    bottom: 470px;
    margin: 0px;
    padding: 0px;
    height: 25vh;
    width: 100%;
    z-index: 1;
`

const Mysong = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 60%;
    height: 100vh;
    padding: 0px 0px;
    top: 0px;
    position: absolute;
    top: 320px;
`

const SongList = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    // justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
    gap: 20px;

    SongCard {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      margin-bottom: 10px;
      top: 500px;
    }
`
