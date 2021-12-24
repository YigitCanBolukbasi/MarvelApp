import React from 'react';
import {FlatList, SafeAreaView, Text, View, Image} from 'react-native';
import Config from 'react-native-config';

import useFetch from '../../hooks/useFetch';
import SearchBar from '../../components/Input';

const CharactersPage = () => {
  const {data: characterData} = useFetch(
    `${Config.API_URL}/characters?ts=1&apikey=${Config.API_KEY}&hash=${Config.API_HASH}`,
  );

  const renderCharacter = ({item}) => {
    return (
      <View>
        <Text>{item.name}</Text>
        <Image
          style={{width: 100, height: 100, borderRadius: 50}}
          source={{uri: `${item.thumbnail.path}.jpg`}}
        />
      </View>
    );
  };

  return (
    <SafeAreaView>
      <Text>Characters</Text>
      <SearchBar label="Arama" placeholder="Arama Yapın." />
      <FlatList data={characterData} renderItem={renderCharacter} />
    </SafeAreaView>
  );
};

export default CharactersPage;
