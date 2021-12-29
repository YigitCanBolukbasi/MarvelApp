import {StyleSheet, Dimensions} from 'react-native';
import color from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  container_body: {
    backgroundColor: '#FFFFFF',

    marin: 10,
    padding: 20,
    borderRadius: 20,
  },
  language_body: {
    margin: 5,
    alignItems: 'center',
  },
  text_language: {
    color: color.darkTheme.primary,
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: color.darkTheme.primary,
  },
  language_switch: {},

  icon_exit: {
    color: color.lightTheme.primary,
    alignSelf: 'center',
    marginTop: 10,
  },
});
