import React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';

function Screen(props) {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View>
        <Text>screen</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
});

export default Screen;
