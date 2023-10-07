import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import colors from '../../config/colors';
import AppTextInput from '../AppInputText';
import ShrortenButton from '../ShortenButton';
import ErrorMessage from '../ErrorMessage';

function ShortenLinkTextInputContainer(props) {
  const [link, setLink] = useState('');

  const getShortenedLink = async () => {
    //GET/POST: https://api.shrtco.de/v2/shorten?url=example.com url to use to get shortened url
    console.log(link, 'link shorten button clicked');

    fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
      .then(response => response.json())
      .then(data => console.log(data, 'reply fromd data base'))
      .catch(error => console.log(error));
  };

  const onChangeInputText = value => {
    setLink(value);
    console.log('value', value, 'link:', link);
  };

  return (
    <View style={styles.container}>
      <AppTextInput onChangeText={onChangeInputText} />
      <ErrorMessage />
      <ShrortenButton onPress={() => getShortenedLink()} />
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
