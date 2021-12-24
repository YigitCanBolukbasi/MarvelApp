import React, {useContext} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Config from 'react-native-config';

import useFetch from '../../hooks/useFetch';
import ComicCard from '../../components/ComicCard/ComicCard';
import {FavoritesContext} from '../../Context/FavoritesContext/FavoritesProvider';

const MainPage = () => {
  const navigation = useNavigation();
  const {dispatch} = useContext(FavoritesContext);
  const {data} = useFetch(
    `https://gateway.marvel.com:443/v1/public/comics?format=comic&formatType=comic&ts=1&apikey=2bf3b8fe6dedde5d3df4920e6df21214&hash=3daa12a3fa29fab4e305a83ef7ef09ec`,
  );

  // const {data} = useFetch(
  //   `${Config.API_URL}/comics?format=comic&formatType=comic&ts=1&apikey=${Config.API_KEY}&hash=${Config.API_HASH}`,
  // );

  const handleAddFavorites = comic =>
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
      onDetail={() => handleComicDetail(item.id)}
      onFavoritePress={() => handleAddFavorites(item)}
    />
  );
  return (
    <SafeAreaView>
      {/* */}
      <FlatList data={data} renderItem={renderComicCard} />
    </SafeAreaView>
  );
};

export default MainPage;
