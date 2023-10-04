import React from 'react';
import {View, StyleSheet} from 'react-native';

import colors from '../../config/colors';
import DisplayLongURL from '../DisplayLongURL';

function DisplayShortenedLink(props) {
  return (
    <View style={styles.container}>
      <DisplayLongURL longURL={'Natnael.com@coding.com'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.White,
    borderRadius: 10,
    padding: 15,
  },
});

export default DisplayShortenedLink;
