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
import NavigationBar from './App/component/NavigationBar';
import ShortenLinkTextInputContainer from './App/component/ShortenLinkTextInputContainer';
import DisplayShortenedLink from './App/component/DisplayShortenedLink';

const App = () => {
  return (
    <NavigationContainer>
      <Screen>
        <NavigationBar />
        <ShortenLinkTextInputContainer />
        <DisplayShortenedLink />
      </Screen>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
