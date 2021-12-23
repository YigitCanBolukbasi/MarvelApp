import React from 'react';
<<<<<<< HEAD
import {SafeAreaView, Text, ActivityIndicator, View, Alert} from 'react-native';

import {useRoute} from '@react-navigation/native';
import Config from 'react-native-config';
=======
import {
  SafeAreaView,
  Text,
  ActivityIndicator,
  View,
  Alert,
  FlatList,
} from 'react-native';
import Config from 'react-native-config';
import {useRoute} from '@react-navigation/native';
>>>>>>> 17016e530b697c946cf7b23021c89d6f01fab333

import useFetch from '../../hooks/useFetch/useFetch';
import ComicDetail from '../../components/ComicDetail/ComicDetail';

const DetailPage = () => {
  const route = useRoute();
  const {id} = route.params;
<<<<<<< HEAD
  const {data, loading, error} = useFetch(
    `https://gateway.marvel.com:443/v1/public/comics/${id}&ts=1&apikey=2bf3b8fe6dedde5d3df4920e6df21214&hash=3daa12a3fa29fab4e305a83ef7ef09ec`,
=======
  const {
    data: comicDetail,
    loading,
    error,
  } = useFetch(
    `${Config.API_URL}/comics/${id}?ts=1&apikey=${Config.API_KEY}&hash=${Config.API_HASH}`,
>>>>>>> 17016e530b697c946cf7b23021c89d6f01fab333
  );
  console.log(id);

  if (loading) {
    <View>
      <ActivityIndicator size="large" />
    </View>;
  }

  if (error) {
    Alert.alert('Hata');
    console.log(error.message);
  }

  if (!comicDetail) {
    return null;
  }

  console.log(comicDetail);
  return (
    <SafeAreaView>
      <Text>DetailPage Page</Text>
      {comicDetail.map(data => (
        <View>
          <Text>{data.title}</Text>
          <Text>{data.description}</Text>
          <Text>
            {data.characters.items.map(n => (
              <Text>{n.name}</Text>
            ))}
          </Text>
        </View>
      ))}
    </SafeAreaView>
  );
};

export default DetailPage;
