import React from 'react';
import {TouchableOpacity, Image, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './FavoriteCard.styles';

const FavoriteCard = ({comics, onDeleteFavorite}) => {
  return (
    <View>
      <TouchableOpacity onPress={onDeleteFavorite}>
        <Icon style={styles.icon} name="delete" size={24} />
      </TouchableOpacity>
      <Image
        style={styles.image}
        source={{uri: `${comics.thumbnail.path}.jpg`}}
      />
      <Text style={styles.title}>{comics.title}</Text>
    </View>
  );
};

export default FavoriteCard;
