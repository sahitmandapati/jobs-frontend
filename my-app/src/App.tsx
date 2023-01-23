import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  // Navigate
} from "react-router-dom";
import LandingPage from './components/landingPage/LandingPage';



const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

