import React, {useContext, useState, useEffect} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {FavoritesContext} from '../../Context/FavoritesContext/FavoritesProvider';
import FavoriteCard from '../../components/FavoriteCard';

const FavoritesPage = () => {
  const {state, dispatch} = useContext(FavoritesContext);
  const [favoritesList, setFavoritesList] = useState();

  const handleDeleteFavorites = comic =>
    dispatch({
      type: 'DELETE_FROM_FAVORITES',
      payload: {
        comic,
      },
    });

  useEffect(() => {
    AsyncStorage.getItem('@favorites').then(item => {
      item && setFavoritesList(JSON.parse(item));
    });
  }, [state]);

  const renderFavoriteCard = ({item}) => (
    <FavoriteCard
      comics={item}
      onDeleteFavorite={() => handleDeleteFavorites(item)}
    />
  );

  return (
    <SafeAreaView>
      <FlatList data={favoritesList} renderItem={renderFavoriteCard} />
    </SafeAreaView>
  );
};

export default FavoritesPage;
