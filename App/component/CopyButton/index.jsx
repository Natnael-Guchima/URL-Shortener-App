import React from 'react';
import {Text, TouchableHighlight, StyleSheet} from 'react-native';
import colors from '../../config/colors';

function CopyButton({title}) {
  return (
    <TouchableHighlight style={styles.container}>
      <Text style={styles.text}>{title ? title : 'copy'}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.White,
    fontFamily: 'Poppins-Bold',
    textTransform: 'capitalize',
    fontSize: 16,
  },
  container: {
    padding: 10,
    backgroundColor: colors.Cyan,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
export default CopyButton;
