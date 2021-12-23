import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    width: Dimensions.get('window').width / 2,
  },
  image: {
    width: 150,
    height: 250,
    resizeMode: 'contain',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
  },
});
