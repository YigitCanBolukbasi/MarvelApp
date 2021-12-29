import React from 'react';
import {Text, Image, View} from 'react-native';

import styles from './Characters.styles';

const Characters = ({item}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: `${item.thumbnail.path}.jpg`}}
      />
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );
};

export default Characters;
