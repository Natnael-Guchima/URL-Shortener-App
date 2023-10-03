/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import Screen from './App/component/Screen';

const App = () => {
  return (
    <NavigationContainer>
      <Screen></Screen>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
