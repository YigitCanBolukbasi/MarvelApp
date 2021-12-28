import React, {createContext, useReducer} from 'react';
import {View, Text} from 'react-native';

import reducer from './reducer';
import store from './store';

const ThemeContext = createContext();

export default function ThemeProvider(children) {
  const [state, dispatch] = useReducer(reducer, store);

  return (
    <ThemeContext.Provider value={{state, dispatch}}>
      {children}
    </ThemeContext.Provider>
  );
}
