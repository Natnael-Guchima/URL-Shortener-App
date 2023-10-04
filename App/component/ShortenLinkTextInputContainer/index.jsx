import React from 'react';
import {View, StyleSheet} from 'react-native';

import colors from '../../config/colors';
import AppTextInput from '../AppInputText';
import ShrortenButton from '../ShortenButton';

function ShortenLinkTextInputContainer(props) {
  return (
    <View style={styles.container}>
      <AppTextInput />
      <ShrortenButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.DarkViolet,
    padding: 10,
    borderRadius: 10,
  },
});

export default ShortenLinkTextInputContainer;
