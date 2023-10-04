import React from 'react';
import {View, StyleSheet} from 'react-native';
import colors from '../../config/colors';

function DisplayShortenedLink(props) {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.White,
    borderRadius: 10,
    padding: 15,
  },
});

export default DisplayShortenedLink;
