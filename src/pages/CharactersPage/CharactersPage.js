import React, {useState, useEffect} from 'react';
import {FlatList, SafeAreaView, Text, View, Image} from 'react-native';
import Config from 'react-native-config';

import useFetch from '../../hooks/useFetch';
import SearchBar from '../../components/Input';
import {useTranslation} from 'react-i18next';

const CharactersPage = () => {
  const [characterSearch, setCharacterSearch] = useState();
  const {data: characterData} = useFetch(
    `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=2bf3b8fe6dedde5d3df4920e6df21214&hash=3daa12a3fa29fab4e305a83ef7ef09ec`,
  );
  const {t, i18n} = useTranslation();
  useEffect(() => {
    if (characterData !== null) {
      setCharacterSearch(characterData);
    }
  }, [characterData]);

  const handleSearchCharacter = text => {
    if (text !== null || text !== '') {
      const filteredCharacter = characterData.filter(characters => {
        const searchText = text.toLowerCase();
        const currentCharacter = characters.name.toLowerCase();
        return currentCharacter.indexOf(searchText) > -1;
      });
      setCharacterSearch(filteredCharacter);
      return;
    }
    setCharacterSearch(characterData);
  };

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
      <SearchBar
        label={t('SearchCharacter')}
        placeholder={t('SearchCharacter')}
        onChangeText={handleSearchCharacter}
      />
      <FlatList
        data={characterSearch}
        renderItem={renderCharacter}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default CharactersPage;
