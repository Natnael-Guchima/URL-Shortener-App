import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import DisplayShortenedLink from '../DisplayShortenedLink';

function DisplayListOfShortenedURLs({children}) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.srollView}>
                <DisplayShortenedLink /> 
                <DisplayShortenedLink /> 
                <DisplayShortenedLink /> 
                <DisplayShortenedLink /> 
                <DisplayShortenedLink /> 
            </ScrollView>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    srollView: {
        paddingHorizontal: 20
    }
})

export default DisplayListOfShortenedURLs;