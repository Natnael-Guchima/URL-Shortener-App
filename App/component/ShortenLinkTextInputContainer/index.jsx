import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import colors from '../../config/colors';
import AppTextInput from '../AppInputText';
import ShrortenButton from '../ShortenButton';
import ErrorMessage from '../ErrorMessage';

function ShortenLinkTextInputContainer(props) {
  const [link, setLink] = useState('');

  return (
    <View style={styles.container}>
      <AppTextInput onChangeText={value => setLink(value)} />
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
