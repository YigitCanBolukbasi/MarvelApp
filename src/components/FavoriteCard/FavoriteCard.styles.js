import {StyleSheet} from 'react-native';

import colors from '../../styles/colors';
import radius from '../../styles/radius';
import spacing from '../../styles/spacing';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: spacing.large,
    borderWidth: 1,
    borderColor: colors.text,
    borderRadius: radius.xsmooth,
    padding: spacing.medium,
  },
  inner_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: colors.text,
    textAlign: 'center',
    flexShrink: 1,
    marginHorizontal: spacing.medium,
    fontSize: 18,
  },
  icon: {
    color: colors.text,
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: radius.smooth,
  },
});
