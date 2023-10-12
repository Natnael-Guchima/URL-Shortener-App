import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import colors from '../../config/colors';
import AppTextInput from '../AppInputText';
import ShrortenButton from '../ShortenButton';
import ErrorMessage from '../ErrorMessage';
import getShortenedURL from '../../utils/getShortenedURL';
import returnData from '../../utils/returnData';

const errorMessages = {
  1: 'Please add a link',
  2: 'Invalid URL submitted',
  3: 'Unknown error',
  4: 'Connection failed',
};

function ShortenLinkTextInputContainer({updateListOfShortLinks}) {
  const [link, setLink] = useState('');
  const [isFailed, setIsFailed] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onShortenButtonPress = async () => {
    const response = await getShortenedURL(link);
    //if no error and server responds with result update list of link, and set error to false
    console.log(response);
    setIsLoading(true);

    if (response.ok) {
      updateListOfShortLinks(response.result);
      setIsFailed('');
    }

    //if error and server respodnds with error message set error message to true
    if (!response.ok) {
      setIsFailed(response.error_code);
    }

    if (response.message) {
      setIsFailed(4);
    }

    setIsLoading(false);
  };

  const onChangeInputText = value => {
    setLink(value);
  };

  return (
    <View style={styles.container}>
      <AppTextInput onChangeText={onChangeInputText} />
      {isFailed && <ErrorMessage error={errorMessages[isFailed]} />}
      <ShrortenButton isLoading={isLoading} onPress={onShortenButtonPress} />
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
