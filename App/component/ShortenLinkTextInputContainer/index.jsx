import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import colors from '../../config/colors';
import AppTextInput from '../AppInputText';
import ShrortenButton from '../ShortenButton';
import ErrorMessage from '../ErrorMessage';
import getShortenedURL from '../../utils/getShortenedURL';

function ShortenLinkTextInputContainer({updateListOfShortLinks}) {
  const [link, setLink] = useState('');

  const onShortenButtonPress = async () => {
    const response = await getShortenedURL(link);
    //if no error and server responds with result update list of link, and set error to false
    if (response.ok) {
      updateListOfShortLinks(response.result);
    }

    //if error and server respodnds with error message set error message to true
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
