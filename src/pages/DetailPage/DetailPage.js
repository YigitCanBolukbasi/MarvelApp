import React from 'react';
import {SafeAreaView, Text, ActivityIndicator, View, Alert} from 'react-native';

import {useNavigation, useRoute} from '@react-navigation/native';

import useFetch from '../../hooks/useFetch/useFetch';
import ComicDetail from '../../components/ComicDetail/ComicDetail';

const DetailPage = () => {
  const route = useRoute();
  const {id} = route.params;
  const {data, loading, error} = useFetch(
    `${Config.API_URL}/comics/${id}&ts=1&apikey=${Config.API_KEY}&hash=${Config.API_HASH}`,
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
