import { useState } from 'react';

export default function useToken() {

  const [token, setToken] = useState(JSON.parse(sessionStorage.getItem('token')));

  const saveToken = (userToken) => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken);
  };

  return {
    token,
    setToken: saveToken
  }
}