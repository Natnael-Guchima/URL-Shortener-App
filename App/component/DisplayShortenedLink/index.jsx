import React from 'react';
import {View, StyleSheet} from 'react-native';

import colors from '../../config/colors';
import DisplayLongURL from '../DisplayLongURL';
import HorizontalSeparatorLine from '../HorizontalSeparatorLine';
import DisplayShorURLText from '../DisplayShorURLText';

function DisplayShortenedLink(props) {
  return (
    <View style={styles.container}>
      <DisplayLongURL longURL={'Natnael.com@coding.com'} />
      <HorizontalSeparatorLine />
      <DisplayShorURLText />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.White,
    borderRadius: 10,
  },
});

export default DisplayShortenedLink;
