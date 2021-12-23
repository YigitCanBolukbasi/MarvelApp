import React from 'react';
import {TouchableOpacity, Text, View, ImageBackground} from 'react-native';

import styles from './ComicCard.styles';

const ComicCard = ({comic, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
<<<<<<< HEAD
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={{uri: `${comic.thumbnail.path}.jpg`}}
        />
        <Text style={styles.title}>{comic.title}</Text>
=======
      <Image
        style={styles.image}
        source={{uri: `${comic.thumbnail.path}.jpg`}}
      />
      <View>
        <Text style={{color: 'black'}}>{comic.title}</Text>
>>>>>>> 17016e530b697c946cf7b23021c89d6f01fab333
      </View>
    </TouchableOpacity>
  );
};

export default ComicCard;
