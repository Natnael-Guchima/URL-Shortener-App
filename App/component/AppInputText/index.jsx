import React from 'react';
import {TextInput, StyleSheet, Platform} from 'react-native';
import colors from '../../config/colors';

function AppTextInput({onChangeText, inputText, ...otherProps}) {
  return (
    <TextInput
      onChangeText={value => onChangeText(value)}
      style={styles.textInput}
      placeholder="Shorten a link here..."
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: colors.White,
    borderRadius: 10,
    paddingLeft: 15,
    paddingVertical: 15,
    marginBottom: 5,
  },
});
export default AppTextInput;
