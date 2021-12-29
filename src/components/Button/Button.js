import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {useTranslation} from 'react-i18next';

import styles from './Button.styles';

function Button({label, ...otherProps}) {
  const {t} = useTranslation();
  return (
    <TouchableOpacity style={styles.container} {...otherProps}>
      <Text style={styles.label}>{t(label)}</Text>
    </TouchableOpacity>
  );
}

export default Button;
