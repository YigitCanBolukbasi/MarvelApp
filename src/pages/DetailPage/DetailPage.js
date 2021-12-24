import React from 'react';
import {
  SafeAreaView,
  Text,
  ActivityIndicator,
  View,
  Alert,
  useWindowDimensions,
  Image,
} from 'react-native';
import {useRoute} from '@react-navigation/native';

import Config from 'react-native-config';
import Html from 'react-native-render-html';

import useFetch from '../../hooks/useFetch/useFetch';
// import ComicDetail from '../../components/ComicDetail/ComicDetail';

const DetailPage = () => {
  const {width} = useWindowDimensions();
  const route = useRoute();
  const {id} = route.params;
  const {
    data: comicDetail,
    loading,
    error,
  } = useFetch(
    `${Config.API_URL}/comics/${id}?ts=1&apikey=${Config.API_KEY}&hash=${Config.API_HASH}`,
  );

  if (loading) {
    <View>
      <ActivityIndicator size="large" />
    </View>;
  }

  if (error) {
    Alert.alert('Hata');
  }

  if (!comicDetail) {
    return null;
  }

  const source = {
    html: `<p>Details: ${comicDetail.map(data =>
      data.textObjects.map(t => t.text),
    )}</p>`,
  };

  return (
    <SafeAreaView>
      {comicDetail.map((data, k) => (
        <View key={k}>
          <Text>{data.title}</Text>
          <Image
            // eslint-disable-next-line react-native/no-inline-styles
            style={{width: 200, height: 200}}
            source={{uri: `${data.thumbnail.path}.jpg`}}
          />
          {data.textObjects ? (
            <Html contentWidth={width} source={source} />
          ) : (
            <Text>No detail</Text>
          )}
          {data.characters.length !== 0 ? (
            !!data && (
              <Text>
                Characters:{' '}
                {data.characters.items.map((n, i) => (
                  <Text key={i}>{n.name}</Text>
                ))}
              </Text>
            )
          ) : (
            <Text>There is no character.</Text>
          )}
        </View>
      ))}
    </SafeAreaView>
  );
};

export default DetailPage;
