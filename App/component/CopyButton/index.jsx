import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../../config/colors';

function CopyButton({title}) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{title ? title : 'copy'}</Text>
    </TouchableOpacity>
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
    marginHorizontal: 15,
    marginBottom: 15,
  },
});
export default CopyButton;
