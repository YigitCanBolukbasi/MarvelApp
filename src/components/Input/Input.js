import React from 'react';
import {View, TextInput} from 'react-native';

import styles from './Input.styles';

function Input({...otherProps}) {
  return (
    <View style={styles.container}>
      <View style={styles.input_container}>
        <TextInput
          placeholderTextColor="#000000"
          style={styles.input}
          {...otherProps}
        />
      </View>
    </View>
  );
}

export default Input;
