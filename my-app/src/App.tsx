import React from 'react';
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
import useToken from './customHooks/useToken.js';

const App = () => {

  const {token, setToken} = useToken()

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={token ? <Navigate to="/home" /> : <LandingPage />} />
          <Route path="/login" element={token ? <Navigate to="/home" /> : <Login setToken={setToken} />} />
          <Route path="/register" element={token ? <Navigate to="/home" /> : <Register />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

