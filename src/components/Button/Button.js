import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {useTranslation} from 'react-i18next';

import styles from './Button.styles';

function Button({label, theme = 'darkTheme', ...otherProps}) {
  const {t, i18n} = useTranslation();
  return (
    <TouchableOpacity style={styles[theme].container} {...otherProps}>
      <Text style={styles[theme].label}>{t(label)}</Text>
    </TouchableOpacity>
  );
}

export default Button;
