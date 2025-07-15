import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import Header from './components/Header';
import HeroImage from './components/HeroImage';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <HeroImage />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});