import React from 'react';
import {View, StyleSheet} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../../config/colors';

function NavigationBar({title, icon}) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="menu" color={colors.Gray} size={30} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.White,
    height: 50,
  },
});

export default NavigationBar;
