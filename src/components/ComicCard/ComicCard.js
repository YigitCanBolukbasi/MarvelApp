import React from 'react';
import {TouchableOpacity, Text, View, ImageBackground} from 'react-native';

import styles from './ComicCard.styles';

const ComicCard = ({comic, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={{uri: `${comic.thumbnail.path}.jpg`}}
        />
        <Text style={styles.title}>{comic.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ComicCard;
