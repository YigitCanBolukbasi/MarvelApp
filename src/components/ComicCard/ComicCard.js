import React from 'react';
import {TouchableOpacity, Text, Image, View} from 'react-native';

import styles from './ComicCard.styles';

const ComicCard = ({comic, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        style={styles.image}
        source={{uri: `${comic.thumbnail.path}.jpg`}}
      />
      <View>
        <Text>{comic.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ComicCard;
