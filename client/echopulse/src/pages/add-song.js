import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/navbar';
import { useState } from 'react';
import Button from '../components/button';
import Uploads from '../components/upload';
import UploadImage from '../components/img-upld';
import axios from 'axios';


const AddSong = () => {

  const [formData, setFormData] = useState({
      titre: '',
      categorie: '',
      lyrics: '',
      date: '',
      status: '',
      format: '',
      cover: null,
      audio: null,
  });

  const Format = [
      'MP3',
      'WAV',
      'FLAC',
      'AAC',
      'OGG',
      'ALAC',
      'AIFF'
  ];

  const Catégorie = [
      'Pop',
      'Rock',
      'R&B',
      'Reggae',
      'Dancehall',
      'Afrobeat',
      'Funk',
      'Electro',
      'Jazz',
      'Blues',
      'Blue',
      'Country',
  ];

  const [loading, setLoading] = useState(false);

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
  const token = getItemWithExpiry('token');

  const [message, setMessage] = useState("");
  
  const handleChange = (e) => {
      const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value}))
  };

  const handleCoverSelect = (file) => {
    setFormData(prev => ({ ...prev, cover: file }));
  };

  const handleAudioSelect = (file) => {
    setFormData(prev => ({ ...prev, audio: file }));
  };

  console.log("Token envoyé :", token);
  
  const addSong = async (formData) =>{
    const data = new FormData();
    data.append("titre", formData.titre);
    data.append("categorie", formData.categorie);
    data.append("format", formData.format);
    data.append("lyrics", formData.lyrics);
    data.append("status", false);
    data.append("cover", formData.cover);
    data.append("audio", formData.audio);
    data.append("date", formData.date);

    return axios.post("/add-song", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  const shareSong = async (formData) =>{
    const data = new FormData();
    data.append("titre", formData.titre);
    data.append("categorie", formData.categorie);
    data.append("format", formData.format);
    data.append("lyrics", formData.lyrics);
    data.append("status", true);
    data.append("cover", formData.cover);
    data.append("audio", formData.audio);
    data.append("date", formData.date);

    return axios.post("/add-song", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  const handleAdd = async() => {
    setLoading(true);
    try {
      const res = await addSong(formData);
      setMessage(`Song Added: ${res.data.message || 'Success'}`);
    } catch(error){
      setMessage(`Error: ${error.response?.data?.message || error.message}`);
    } finally {
      setTimeout(() => setMessage(""), 3000);
    }
    setLoading(false);
  };

  const handleShare = async() => {
    setLoading(true);
    try {
      const res = await shareSong(formData);
      setMessage(`Song Added: ${res.data.message || 'Success'}`);
    } catch (error){
      setMessage(`Error: ${error.response?.data?.message || error.message}`);
    } finally {
      setTimeout(() => setMessage(""), 3000);
    }
    setLoading(false);
  };

  return (
    <Container>
        <Navbar/>
        <Upload>
          <img src='https://i.postimg.cc/vm9TBgLL/30ab4406-30d8-477d-8669-2d5dd79b8eaa.png' class="logo" alt=""/>
          <form>
            <songcarac>
              <input name='titre' type='text' placeholder='Title' value={formData.titre} onChange={handleChange} required/>
                <select name='categorie' value={formData.categorie} onChange={handleChange} required>
                    <option value="">-- Select a categorie --</option> 
                    {Catégorie.map((categorie, index) => ( 
                        <option key={index} value={categorie}>{categorie}</option> 
                    ))} 
                </select> 
            </songcarac> 
            <input name='lyrics' className="lyrics" type='text' placeholder='Add the song lyric' value={formData.lyrics} onChange={handleChange}/>
            <date>
              <input name='date' type='date' value={formData.date} onChange={handleChange} required/>
                <select name='format' value={formData.format} onChange={handleChange} required>
                    <option value="">-- Select a format --</option>
                    {Format.map((format, index) => (
                        <option key={index} value={format}>{format}</option>
                    ))}
                </select>
            </date>
            <songend>
              <UploadImage onFileSelect={handleCoverSelect}/>
              <Uploads onFileSelect={handleAudioSelect}/>
            </songend>
            <p>{message}</p>
          </form>
          <Postbtn>
              <Button text = { 'Add Song ' } onClick={handleAdd}/>
              {loading && <span>Loading...</span>}
              <Button text = { 'Share Song '} onClick={handleShare}/>
          </Postbtn>
        </Upload>
    </Container>
  )
};

export default AddSong;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-image: url('https://i.postimg.cc/T1G4gV6r/SL-123119-26540-03.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100%;
`

const Upload = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: absolute;
    border: solid 1px #000000;
    background-color: #ffffff;
    border-radius: 5%;
    height: 70%;
    width: 37%;
    top: 160px;
    left: 800px;

    .logo {
      height: 60px;
      width: 12%;
      background-color: #91044a;
      margin-top: 30px;
      margin-bottom: 20px;
    }

    form {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      input, select {
        padding: 7px;
        border-radius: 5px;
        border: 1px solid #1c3b72;
        font-size: 12px;
        color:rgb(105, 111, 114);
        height: 25px;
        outline: none;
      }

      .lyrics {
        margin-bottom: 15px;
        height: 40px;
        width: 95%;
      }

      select {
        height: 40px;
      }

      date {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 50px;
        margin-bottom: 10px;
      }

      songcarac {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 50px;
        margin-bottom: 20px;
      }

      songend {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 25px;
        margin-bottom: 20px;
      }

      p {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        color: #000000;
      }
    }
`

const Postbtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
`