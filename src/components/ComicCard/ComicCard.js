import React from 'react';
import {
  TouchableOpacity,
  Text,
  Image,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './ComicCard.styles';

const ComicCard = ({comics, onDetail, onFavoritePress}) => {
  return (
    <TouchableWithoutFeedback onPress={onDetail}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: `${comics.thumbnail.path}.jpg`}}
        />
        <View style={styles.body_container}>
          <Text style={styles.title}>{comics.title}</Text>
        </View>
        <TouchableOpacity onPress={onFavoritePress}>
          <Icon style={styles.icon} name="cards-heart" size={40} />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ComicCard;
