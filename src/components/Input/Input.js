import React from 'react';
import {SafeAreaView, Text, View, TextInput} from 'react-native';
import styles from './Input.styles';

function Input({label, ...otherProps}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input_container}>
        <TextInput style={styles.input} {...otherProps} />
      </View>
    </View>
  );
}

export default Input;
