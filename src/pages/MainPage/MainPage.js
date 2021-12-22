import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import Config from 'react-native-config';

import useFetch from '../../hooks/useFetch';
import ComicCard from '../../components/ComicCard/ComicCard';
import {useNavigation} from '@react-navigation/native';

const MainPage = () => {
  const navigation = useNavigation();
  const {data} = useFetch(
    `${Config.API_URL}/comics?format=comic&formatType=comic&ts=1&apikey=${Config.API_KEY}&hash=${Config.API_HASH}`,
  );
  // const {data: characters} = useFetch(
  //   `${Config.API_URL}/characters?comics=1749&ts=1&apikey=2bf3b8fe6dedde5d3df4920e6df21214&hash=3daa12a3fa29fab4e305a83ef7ef09ec`,
  // );

  const handleComicDetail = id => {
    navigation.navigate('DetailPage', {id});
  };

  const renderComicCard = ({item}) => (
    <ComicCard comic={item} onPress={handleComicDetail} />
  );
  return (
    <SafeAreaView>
      <FlatList data={data} renderItem={renderComicCard} />
    </SafeAreaView>
  );
};

export default MainPage;
