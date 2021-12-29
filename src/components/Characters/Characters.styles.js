import {StyleSheet} from 'react-native';

import colors from '../../styles/colors';
import radius from '../../styles/radius';
import spacing from '../../styles/spacing';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: spacing.small,
    borderWidth: 1,
    borderColor: colors.text,
    borderRadius: radius.curved,
    padding: spacing.medium,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: radius.curved,
  },
  name: {
    color: colors.text,
    marginLeft: spacing.medium,
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
