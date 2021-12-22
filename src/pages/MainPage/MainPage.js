import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Config from 'react-native-config';

import useFetch from '../../hooks/useFetch';

const MainPage = () => {
  const {data} = useFetch(
    `${Config.API_URL}/comics?ts=1&apikey=${Config.API_KEY}&hash=${Config.API_HASH}`,
  );
  console.log(data);
  return (
    <SafeAreaView>
      <Text>Main Page</Text>
    </SafeAreaView>
  );
};

export default MainPage;
