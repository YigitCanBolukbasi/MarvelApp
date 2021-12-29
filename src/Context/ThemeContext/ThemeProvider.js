import React, {createContext, useEffect, useState} from 'react';
import {Appearance} from 'react-native';

export const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(Appearance.getColorScheme());

  useEffect(() => {
    Appearance.addChangeListener(scheme => {
      setTheme(scheme.colorScheme);
    });
  }, [theme]);

  return (
    <ThemeContext.Provider value={{theme}}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
