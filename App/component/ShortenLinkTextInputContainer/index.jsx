import React from 'react';
import {View, StyleSheet} from 'react-native';
import colors from '../../config/colors';

function ShortenLinkTextInputContainer({
  AppTextInput,
  ShortenItButton,
  ErrorMessageText,
}) {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.DarkViolet,
    padding: 10,
    borderRadius: 10,
  },
});

export default ShortenLinkTextInputContainer;
