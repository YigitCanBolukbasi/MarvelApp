import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default {
  darkTheme: StyleSheet.create({
    container: {
      margin: 5,
      backgroundColor: colors.darkTheme.primary,
      padding: 5,
      borderRadius: 10,
      alignItems: 'center',
    },
    label: {
      color: colors.darkTheme.secondaryText,
      fontWeight: 'bold',
    },
  }),
  lightTheme: StyleSheet.create({
    container: {
      margin: 5,
      backgroundColor: colors.lightTheme.primary,
      padding: 5,
      borderRadius: 10,
      alignItems: 'center',
    },
    label: {
      color: colors.lightTheme.secondaryText,
      fontWeight: 'bold',
    },
  }),
};
