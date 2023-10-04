import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../../config/colors';

function NavigationBar({title, icon}) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="menu" color={colors.Gray} size={30} />
      <Text style={styles.header}>Shortly</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.White,
    flexDirection: 'row-reverse',
    height: 50,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  header: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
  },
});

export default NavigationBar;
