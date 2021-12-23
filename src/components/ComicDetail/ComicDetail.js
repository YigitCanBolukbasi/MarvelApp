import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './ComicDetail.styles';

const ComicDetail = ({detail}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{detail.title}</Text>
      {/* <Image
        source={{uri: `${detail.thumbnail.path}.jpg`}}
        style={styles.image}
      /> */}
      <View style={styles.container_body}>
        {/* <Text style={styles.description}>{detail.description}</Text> */}
        {/* <Text style={styles.characters}>{detail.characters}</Text> */}
      </View>
    </View>
  );
};

export default ComicDetail;
