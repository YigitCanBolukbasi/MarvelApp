import React from 'react';
import {TouchableOpacity, Image, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FavoriteCard = ({comics, onDeleteFavorite}) => {
  return (
    <View>
      <TouchableOpacity onPress={onDeleteFavorite}>
        <Icon name="delete" size={24} />
      </TouchableOpacity>
      <Image
        style={{width: 200, height: 200}}
        source={{uri: `${comics.thumbnail.path}.jpg`}}
      />
      <Text>{comics.title}</Text>
    </View>
  );
};

export default FavoriteCard;
