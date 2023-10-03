import React from 'react';
import {View, StyleSheet} from 'react-native';

function NavigationBar({title, icon}) {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    height: 10,
  },
});

export default NavigationBar;
