import React from 'react';
import {View, StyleSheet} from 'react-native';
import colors from '../../config/colors';

function NavigationBar({title, icon}) {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.White,
    height: 50,
  },
});

export default NavigationBar;
