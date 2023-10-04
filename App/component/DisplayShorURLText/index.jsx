import React from 'react';
import {Text, StyleSheet} from 'react-native';
import colors from '../../config/colors';

function DisplayShorURLText({shortURL}) {
  return (
    <Text style={styles.text}>{shortURL ? shortURL : 'shorturl.com'}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins-Medium',
    color: colors.Cyan,
    margin: 15,
  },
});
export default DisplayShorURLText;
