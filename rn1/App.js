import {StyleSheet, View } from 'react-native'
import React from 'react'
import Horizontal from './components/Horizontal';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Horizontal />
      </View>
    )
  }
};

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});