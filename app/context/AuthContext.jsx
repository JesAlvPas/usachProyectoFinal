'use client';

import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedSession = localStorage.getItem('isLogged');
    const savedUser = localStorage.getItem('userData');

    if (savedSession === 'true') {
      setIsLogged(true);
    }
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);


  // Inicio de Sesión
  
  const login = (userData = {}) => {
    setIsLogged(true);
    setUser(userData);
    localStorage.setItem('isLogged', 'true');
    localStorage.setItem('userData', JSON.stringify(userData));
  };



  // Cierre de Sesión

  const logout = () => {
    setIsLogged(false);
    setUser(null);
    localStorage.removeItem('isLogged');
    localStorage.removeItem('userData');
  };

  return (
    <AuthContext.Provider value={{ isLogged, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}