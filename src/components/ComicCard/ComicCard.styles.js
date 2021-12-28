import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  image: {
    width: Dimensions.get('screen').width * 0.7,
    height: Dimensions.get('screen').width * 1.3,
    resizeMode: 'contain',
    margin: 15,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#E68C38',
    margin: 5,
  },
  body_container: {
    position: 'absolute',
    top: 470,
    left: 15,
    right: 15,
    bottom: 80,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
  },
  title: {
    color: '#E68C38',
    fontWeight: 'bold',
    fontSize: 20,
  },
  icon: {
    color: '#E68C38',
    marginBottom: 15,
  },
});
