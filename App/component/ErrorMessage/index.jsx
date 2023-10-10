import React from 'react';
import {Text, StyleSheet} from 'react-native';

function ErrorMessage({error}) {
  return <Text style={styles.errorMessage}>{error}</Text>;
}
const styles = StyleSheet.create({
  errorMessage: {
    color: 'red',
    fontFamily: 'Poppins-Italic',
  },
});
export default ErrorMessage;
