import React from 'react';
import {SafeAreaView, Text, ActivityIndicator, View, Alert} from 'react-native';

import {useRoute} from '@react-navigation/native';
import Config from 'react-native-config';

import useFetch from '../../hooks/useFetch/useFetch';
import ComicDetail from '../../components/ComicDetail/ComicDetail';

const DetailPage = () => {
  const route = useRoute();
  const {id} = route.params;
  const {data, loading, error} = useFetch(
    `https://gateway.marvel.com:443/v1/public/comics/${id}&ts=1&apikey=2bf3b8fe6dedde5d3df4920e6df21214&hash=3daa12a3fa29fab4e305a83ef7ef09ec`,
  );

  if (loading) {
    <View>
      <ActivityIndicator size="large" />
    </View>;
  }

  if (error) {
    Alert.alert('Hata', error.message);
  }

  if (!data) {
    return null;
  }

  return (
    <SafeAreaView>
      <Text>DetailPage Page</Text>
      <ComicDetail detail={data} />
    </SafeAreaView>
  );
};

export default DetailPage;
