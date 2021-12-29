import {StyleSheet} from 'react-native';

import colors from '../../styles/colors';
import radius from '../../styles/radius';
import spacing from '../../styles/spacing';

export default StyleSheet.create({
  container: {
    margin: spacing.medium,
  },
  label: {
    color: colors.text,
    marginBottom: spacing.medium,
    fontWeight: 'bold',
    fontSize: 16,
  },
  input_container: {
    backgroundColor: '#a9a9a9',
    padding: spacing.small,
    borderRadius: radius.smooth,
  },
  input: {
    fontStyle: 'italic',
  },
});
