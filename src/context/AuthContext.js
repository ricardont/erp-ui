// src/context/AuthContext.js
import { createContext, useState } from 'react';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = async (email, password) => {
    const res = await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({user: { email, password }}),
    });

    const data = await res;
    if (res.ok) {
      // localStorage.setItem('token', data.headers.authorization);
      const authorizationHeaderValue = data.headers.get('authorization');
      const token = authorizationHeaderValue.replace('Bearer ', '');
      localStorage.setItem('token', token);
      setUser(res);
      return true;   
    } else {
      console.log(data.status);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
