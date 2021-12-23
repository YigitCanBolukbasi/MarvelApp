import React from 'react';
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

import useFetch from '../../hooks/useFetch/useFetch';
import ComicDetail from '../../components/ComicDetail/ComicDetail';

const DetailPage = () => {
  const route = useRoute();
  const {id} = route.params;
  const {
    data: comicDetail,
    loading,
    error,
  } = useFetch(
    `${Config.API_URL}/comics/${id}?ts=1&apikey=${Config.API_KEY}&hash=${Config.API_HASH}`,
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
