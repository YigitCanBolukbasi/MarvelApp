import React, {useState, useEffect} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import Config from 'react-native-config';
import {useTranslation} from 'react-i18next';

import useFetch from '../../hooks/useFetch';
import SearchBar from '../../components/Input';
import Characters from '../../components/Characters';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const CharactersPage = () => {
  const [characterSearch, setCharacterSearch] = useState();
  const {
    data: characterData,
    loading,
    error,
  } = useFetch(
    `${Config.API_URL}/characters?ts=1&apikey=${Config.API_KEY}&hash=${Config.API_HASH}`,
  );
  const {t} = useTranslation();
  useEffect(() => {
    if (characterData !== null) {
      setCharacterSearch(characterData);
    }
  }, [characterData]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

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
    return <Characters item={item} />;
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
