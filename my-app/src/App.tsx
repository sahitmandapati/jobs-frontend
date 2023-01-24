import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  // Navigate
} from "react-router-dom";
import LandingPage from './components/landingPage/LandingPage';
import Login from './components/auth/Login';
import Register from './components/auth/Register';


const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

