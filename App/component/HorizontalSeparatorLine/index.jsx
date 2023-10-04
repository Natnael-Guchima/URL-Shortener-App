import React from 'react';
import {View, StyleSheet} from 'react-native';
import colors from '../../config/colors';

function HorizontalSeparatorLine(props) {
  return <View style={styles.horizontalLine} />;
}

const styles = StyleSheet.create({
  horizontalLine: {
    height: 1,
    backgroundColor: colors.GrayishViolet,
  },
});

export default HorizontalSeparatorLine;
