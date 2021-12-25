import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  image: {
    width: (Dimensions.get('screen').width * 2) / 3,
    height: (Dimensions.get('screen').height * 2) / 3,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    margin: 20,
    borderRadius: 40,
  },
  body_container: {
    position: 'absolute',
    top: 400,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 10,
  },
  title: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  icon: {
    color: '#212121',
  },
});
