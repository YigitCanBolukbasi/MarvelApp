import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

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
    color: colors.text,
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
  language_switch: {},

  icon_exit: {
    color: colors.text,
    alignSelf: 'center',
    marginTop: 10,
  },
});
