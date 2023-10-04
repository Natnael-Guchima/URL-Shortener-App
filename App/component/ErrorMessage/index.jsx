import React from 'react';
import {Text, StyleSheet} from 'react-native';

function ErrorMessage(props) {
  return <Text style={styles.errorMessage}>Please add a link</Text>;
}
const styles = StyleSheet.create({
  errorMessage: {
    color: 'red',
    fontFamily: 'Poppins-Italic',
  },
});
export default ErrorMessage;
