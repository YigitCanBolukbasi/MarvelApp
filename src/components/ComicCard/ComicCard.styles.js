import {StyleSheet, Dimensions} from 'react-native';

import radius from '../../styles/radius';
import colors from '../../styles/colors';
import spacing from '../../styles/spacing';

export default StyleSheet.create({
  image: {
    width: Dimensions.get('screen').width * 0.7,
    height: Dimensions.get('screen').width * 1.5,
    margin: spacing.big,
    borderRadius: radius.curved,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: radius.curved,
  },
  body_container: {
    position: 'absolute',
    top: 470,
    left: 15,
    right: 15,
    bottom: 70,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: spacing.medium,
    borderBottomEndRadius: radius.curved,
    borderBottomStartRadius: radius.curved,
  },
  title: {
    color: colors.text,
    fontWeight: 'bold',
    fontSize: 20,
  },
  icon: {
    color: colors.text,
    marginBottom: spacing.big,
  },
});
