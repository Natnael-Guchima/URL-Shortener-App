import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import colors from '../../config/colors';

function AppTextInput(props) {
  return (
    <TextInput style={styles.textInput} placeholder="Shorten a link here..." />
  );
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: colors.White,
  },
});
export default AppTextInput;
