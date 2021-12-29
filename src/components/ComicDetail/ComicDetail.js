import React from 'react';
import {ScrollView, View, Text, Image, useWindowDimensions} from 'react-native';
import Html from 'react-native-render-html';

import styles from './ComicDetail.styles';
import {htmlStyles} from './ComicDetail.styles';

const ComicDetail = ({comicDetail}) => {
  const {width} = useWindowDimensions();

  const source = {
    html: `<p>Details: ${comicDetail.map(data =>
      data.textObjects.map(t => t.text),
    )}</p>`,
  };

  return (
    <ScrollView>
      {comicDetail.map((data, k) => (
        <View style={styles.container} key={k}>
          <Text style={styles.title}>{data.title}</Text>
          <Image
            style={styles.image}
            source={{uri: `${data.thumbnail.path}.jpg`}}
          />
          <View style={styles.detail_container}>
            {data.textObjects ? (
              <Html
                tagsStyles={htmlStyles}
                contentWidth={width}
                source={source}
              />
            ) : (
              <Text style={styles.text}>No detail</Text>
            )}
          </View>
          <Text style={styles.characters_title}>Characters:</Text>
          {data.characters.length !== 0 ? (
            !!data &&
            data.characters.items.map((n, i) => (
              <View style={styles.characters_container} key={i}>
                <Text style={styles.characters}>{n.name}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.text}>There is no character.</Text>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

export default ComicDetail;
