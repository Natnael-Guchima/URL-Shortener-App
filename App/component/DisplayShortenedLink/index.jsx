import React from 'react';
import {View, StyleSheet} from 'react-native';

import colors from '../../config/colors';
import DisplayLongURL from '../DisplayLongURL';
import HorizontalSeparatorLine from '../HorizontalSeparatorLine';

function DisplayShortenedLink(props) {
  return (
    <View style={styles.container}>
      <DisplayLongURL longURL={'Natnael.com@coding.com'} />
      <HorizontalSeparatorLine />
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
