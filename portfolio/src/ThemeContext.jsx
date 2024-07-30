// src/ThemeContext.jsx
import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isSun, setIsSun] = useState(true);

  const toggleTheme = () => {
    setIsSun(!isSun);
  };

  return (
    <ThemeContext.Provider value={{ isSun, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
