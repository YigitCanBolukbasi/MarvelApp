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
      <View>
        <Image
          style={styles.image}
          source={{uri: `${comics.thumbnail.path}.jpg`}}
        />
        <View>
          <Text style={{color: 'black'}}>{comics.title}</Text>
        </View>
        <TouchableOpacity onPress={onFavoritePress}>
          <Icon name="cards-heart" size={24} />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ComicCard;
