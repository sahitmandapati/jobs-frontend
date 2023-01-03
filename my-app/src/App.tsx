import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import LandingPage from './components/landingPage/LandingPage';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Home from './components/dashboard/Home';
import useToken from './customHooks/useToken';



const App = () => {

  const { token, setToken } = useToken();

  // useEffect(() => {
  //   console.log(token)
  // })


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={token ? <Navigate to="/home"/> : <LandingPage />} />
          <Route path="/signin" element={token ? <Navigate to="/home"/> : <SignIn setToken={setToken} />} />
          <Route path="/signup" element={token ? <Navigate to="/home"/> : <SignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

