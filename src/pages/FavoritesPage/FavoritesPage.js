import React, {useContext} from 'react';
import {SafeAreaView, FlatList} from 'react-native';

import {FavoritesContext} from '../../Context/FavoritesContext/FavoritesProvider';
import FavoriteCard from '../../components/FavoriteCard';

const FavoritesPage = () => {
  const {state, dispatch} = useContext(FavoritesContext);

  const handleDeleteFavorites = comic =>
    dispatch({
      type: 'DELETE_FROM_FAVORITES',
      payload: {
        comic,
      },
    });

  const renderFavoriteCard = ({item}) => (
    <FavoriteCard
      comics={item}
      onDeleteFavorite={() => handleDeleteFavorites()}
    />
  );

  return (
    <SafeAreaView>
      <FlatList data={state.favoritesList} renderItem={renderFavoriteCard} />
    </SafeAreaView>
  );
};

export default FavoritesPage;
