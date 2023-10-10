import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import colors from '../../config/colors';
import AppTextInput from '../AppInputText';
import ShrortenButton from '../ShortenButton';
import ErrorMessage from '../ErrorMessage';
import getShortenedURL from '../../utils/getShortenedURL';

function ShortenLinkTextInputContainer(props) {
  const [link, setLink] = useState('');

  const onShortenButtonPress = async () => {
    const response = await getShortenedURL(link);
    console.log(response, link);
  };

  const onChangeInputText = value => {
    setLink(value);
  };

  return (
    <View style={styles.container}>
      <AppTextInput onChangeText={onChangeInputText} />
      <ErrorMessage />
      <ShrortenButton onPress={onShortenButtonPress} />
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
