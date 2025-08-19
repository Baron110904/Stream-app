import './App.css';
// import React, { useEffect, useState } from 'react';
import Welcome from './pages/welcome';
import NotFound from './pages/notFound';
import Sign from './pages/sign-in';
import Login from './pages/log-in';
import About from './pages/about';
import Song from './pages/song';
import AddSong from './pages/add-song';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ForgotPw from './pages/forgot-password';
import ResetPw from './pages/reset-pw';
import AdminDashboard from './pages/dash';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/sign-in" element={<Sign />} />
                <Route path="/log-in" element={<Login />} />
                <Route path="/about" element={<About />} />
                <Route path="/song" element={<Song />} />
                <Route path="/add-song" element={<AddSong />} />
                <Route path="/forgot-password" element={<ForgotPw />} />
                {/* <Route path="/reset-pw" element={<ResetPw />} /> */}
                <Route path="/reset-pw/:token" element={<ResetPw />} />
                <Route path="/dash" element={<AdminDashboard />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default App;
