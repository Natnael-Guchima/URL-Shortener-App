import React from 'react';
import {TextInput, StyleSheet, Platform} from 'react-native';
import colors from '../../config/colors';

function AppTextInput({inputText}) {
  return (
    <TextInput style={styles.textInput} placeholder="Shorten a link here..." />
  );
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: colors.White,
    borderRadius: 10,
    paddingLeft: 15,
    paddingVertical: 15,
  },
});
export default AppTextInput;
