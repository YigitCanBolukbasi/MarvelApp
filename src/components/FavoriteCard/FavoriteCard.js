import React from 'react';
import {TouchableOpacity, Image, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './FavoriteCard.styles';

const FavoriteCard = ({comics, onDeleteFavorite}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: `${comics.thumbnail.path}.jpg`}}
      />
      <View style={styles.inner_container}>
        <Text style={styles.title}>{comics.title}</Text>
        <TouchableOpacity onPress={onDeleteFavorite}>
          <Icon style={styles.icon} name="delete" size={40} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FavoriteCard;
