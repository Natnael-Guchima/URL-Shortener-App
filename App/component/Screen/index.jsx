import React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import colors from '../../config/colors';

function Screen(props) {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Text>screen</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
  container: {
    backgroundColor: colors.Gray,
    flex: 1,
  },
});

export default Screen;
