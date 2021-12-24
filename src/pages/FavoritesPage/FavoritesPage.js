import React, {useContext} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Config from 'react-native-config';

import {FavoritesContext} from '../../Context/FavoritesContext/FavoritesProvider';
import ComicCard from '../../components/ComicCard';
import useFetch from '../../hooks/useFetch';

const FavoritesPage = () => {
  const {state, dispatch} = useContext(FavoritesContext);
  const {data} = useFetch(
    `${Config.API_URL}/comics?format=comic&formatType=comic&ts=1&apikey=${Config.API_KEY}&hash=${Config.API_HASH}`,
  );
  const navigation = useNavigation();

  const handleDeleteFavorites = comic =>
    dispatch({
      type: 'ADD_TO_FAVORITES',
      payload: {
        comic,
      },
    });

  const handleComicDetail = id => {
    navigation.navigate('DetailPage', {id});
  };

  const renderComicCard = ({item}) => (
    <ComicCard
      comics={item}
      onPress={() => handleComicDetail(item.id)}
      onFavoritePress={() => handleDeleteFavorites(item.id)}
    />
  );

  return (
    <SafeAreaView>
      <FlatList data={state.favoritesList} renderItem={renderComicCard} />
    </SafeAreaView>
  );
};

export default FavoritesPage;
