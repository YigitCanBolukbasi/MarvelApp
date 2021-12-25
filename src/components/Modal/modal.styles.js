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
  language: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    justifyContent: 'space-between',
  },
  text_language: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  switch_language: {},

  theme: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    justifyContent: 'space-between',
  },

  text_theme: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  icon_exit: {
    color: color.lightTheme.primary,
    alignSelf: 'flex-end',
    marginTop: 10,
  },
});
