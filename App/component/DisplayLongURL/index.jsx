import React from 'react';
import {Text, StyleSheet} from 'react-native';
import colors from '../../config/colors';

function DisplayLongURL({longURL}) {
  return (
    <Text style={styles.text}>
      {longURL ? longURL : 'natnealReactNativeDev.com'}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.Black,
    fontFamily: 'Poppins-Medium',
    marginBottom: 15,
  },
});
export default DisplayLongURL;
