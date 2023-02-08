import React, { useState } from 'react';
import authHero from '../../images/undraw_sign_in_re_o58h.svg'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { changeUserAccountType, changeUserName } from '../../store/userData';

const Login = ({setToken} : any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  const [alert, setAlert] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  function handleRoutes(response : any) {
    sessionStorage.setItem("token",JSON.stringify(response.data.token))
    dispatch(changeUserName(response.data.user.name))
    dispatch(changeUserAccountType(response.data.user.accountType))
    navigate('/home')
  }

  async function loginUserAuthentication(credentials: any) {
    return (axios.post('https://jobs-api-1.vercel.app/api/v1/auth/login', credentials)
      .then(response => handleRoutes(response))
      .catch((err) => {
        setAlert(err);
        setTimeout(() => {
          setAlert('');
        }, 1000)
      })
    )
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const loginResponse = await loginUserAuthentication({
      email,
      password,
    });
  }

  return (
    <div className='flex max-[640px]:flex-col-reverse'>
      <img className='p-6' src={authHero} alt="hero"/>
      <div className='w-full'>
        <div className='px-4 m-2 font-black text-blue-500 text-2xl text-center uppercase'>UDHYOGAM</div>
        <div className='px-4 m-2 font-black text-gray-400 text-base text-center uppercase'>Sigin into your account</div>
        <form onSubmit={handleSubmit} className='flex flex-col w-10/12 mx-auto h-4/5 mt-20'>
          <label className='flex flex-col'>
            Email:
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className='border border-gray-400 p-2 rounded'
            />
          </label>
          <br />
          <label className='flex flex-col w-full'>
            Password:
            <div className='inline-flex w-full'>
              <input
                type={hidePassword ? "password" : "text"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className='border border-gray-400 p-2 w-11/12'
              />
              <button onClick={() => setHidePassword(!hidePassword)} className='border border-gray-400 p-2 w-1.5/12 m-auto'>
                {hidePassword ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
                  : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                }
              </button>
            </div>
          </label>
          <br />
          {alert && <div className="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
            <span className="sr-only">Info</span>
            <div>Incorrect details.</div>
          </div>}
          <button type="submit" className='m-2 bg-blue-500 hover:bg-blue-400 text-white font-bold px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>Login</button>
        </form>
      </div>

    </div>
  );
};

export default Login;
