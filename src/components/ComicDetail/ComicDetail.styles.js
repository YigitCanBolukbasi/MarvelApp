import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors';
import spacing from '../../styles/spacing';
import radius from '../../styles/radius';

export default StyleSheet.create({
  container: {},
  title: {
    fontSize: 24,
    textAlign: 'center',
    margin: spacing.small,
    fontWeight: 'bold',
    color: colors.text,
  },
  image: {
    borderColor: colors.text,
    borderTopWidth: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  text: {
    color: colors.text,
    fontSize: 18,
    fontStyle: 'italic',
    margin: spacing.small,
  },
  characters_title: {
    fontSize: 16,
    color: colors.text,
    marginLeft: spacing.medium,
    fontWeight: 'bold',
  },
  characters: {
    fontSize: 16,
    color: colors.text,
    fontStyle: 'italic',
  },
  characters_container: {
    marginLeft: spacing.huge,
  },
  detail_container: {
    borderWidth: 1,
    borderColor: colors.text,
    borderRadius: radius.curved,
    margin: spacing.medium,
    padding: spacing.small,
  },
});

export const htmlStyles = {
  p: {
    color: colors.text,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: spacing.small,
    fontSize: 16,
  },
};
