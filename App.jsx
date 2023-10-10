/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import Screen from './App/component/Screen';
import NavigationBar from './App/component/NavigationBar';
import ShortenLinkTextInputContainer from './App/component/ShortenLinkTextInputContainer';
import DisplayListOfShortenedURLs from './App/component/DisplayListOfShortenedURLs';

const App = () => {
  const [listOfShortLinks, setListOfShortLinks] = useState([]);
  // list shouldn't be greater than 5
  const updateListOfShortLinks = response => {
    //add new link the first row of the array

    setListOfShortLinks(value => [response, ...value]);

    //if list greater than 5 pop the last item of the array
    if (listOfShortLinks.length > 4) {
      setListOfShortLinks(value => {
        value.pop();
        return value;
      });
    }
  };
  return (
    <NavigationContainer>
      <Screen>
        <NavigationBar />
        <ShortenLinkTextInputContainer
          updateListOfShortLinks={updateListOfShortLinks}
        />
        <DisplayListOfShortenedURLs />
      </Screen>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
