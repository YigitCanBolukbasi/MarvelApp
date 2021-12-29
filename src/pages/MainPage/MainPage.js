import React, {useContext} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Config from 'react-native-config';

import useFetch from '../../hooks/useFetch';
import ComicCard from '../../components/ComicCard/ComicCard';
import {FavoritesContext} from '../../Context/FavoritesContext/FavoritesProvider';
import routes from '../../navigation/routes';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const MainPage = () => {
  const navigation = useNavigation();
  const {dispatch} = useContext(FavoritesContext);

  const {data, loading, error} = useFetch(
    `${Config.API_URL}/comics?format=comic&formatType=comic&ts=1&apikey=${Config.API_KEY}&hash=${Config.API_HASH}`,
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const handleAddFavorites = comic =>
    dispatch({
      type: 'ADD_TO_FAVORITES',
      payload: {
        comic,
      },
    });

  const handleComicDetail = id => {
    navigation.navigate(routes.Detail_Page, {id});
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
      <FlatList
        data={data}
        renderItem={renderComicCard}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default MainPage;
