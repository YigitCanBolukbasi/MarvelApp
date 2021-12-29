import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container_body: {
    backgroundColor: '#FFFFFF',
    margin: 10,
    padding: 20,
    borderRadius: 20,
  },
  text_language: {
    color: colors.text,
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    textAlign: 'center',
  },
  icon_exit: {
    color: colors.text,
    alignSelf: 'center',
    marginTop: 10,
  },
  icon_settings: {
    color: colors.text,
  },
});
