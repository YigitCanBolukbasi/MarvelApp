import React, {createContext, useReducer, useEffect} from 'react';
import {Alert} from 'react-native';
import reducer from './reducer';
import store from './store';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavoritesContext = createContext();

const FavoritesProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, store);

  const getStorageData = async () => {
    try {
      const storage_res = await AsyncStorage.getItem('@favorites');
      return storage_res != null
        ? dispatch({type: 'SET_DATA', payload: JSON.parse(storage_res)})
        : null;
    } catch (e) {
      Alert.alert(e.massage);
    }
  };
  useEffect(() => {
    getStorageData();
  }, []);

  return (
    <FavoritesContext.Provider value={{state, dispatch}}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
