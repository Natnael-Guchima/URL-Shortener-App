import React from 'react';
import {View, StyleSheet} from 'react-native';

import colors from '../../config/colors';
import AppTextInput from '../AppInputText';
import ShrortenButton from '../ShortenButton';
import ErrorMessage from '../ErrorMessage';

function ShortenLinkTextInputContainer(props) {
  return (
    <View style={styles.container}>
      <AppTextInput />
      <ErrorMessage />
      <ShrortenButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.DarkViolet,
    padding: 20,
    borderRadius: 10,
    margin: 20,
  },
});

export default ShortenLinkTextInputContainer;
