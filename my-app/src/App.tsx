import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import LandingPage from './components/landingPage/LandingPage';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Home from './components/home';

const App = () => {

  // const tokenValue = sessionStorage.getItem('token');
  // const tokenString = tokenValue ? JSON.parse(tokenValue) : null;
  // const [token, setToken] = useState(sessionStorage.getItem('token'))


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

