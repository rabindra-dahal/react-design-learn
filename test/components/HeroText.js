import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class HeroText extends Component {
  render() {
    return (
      <View style={styles.hrContainer}>
        <Text style={styles.hrText}>Laptop</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    hrContainer: {
        
    },
    hrText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#292929',
        backgroundColor: 'rgba(255,255,255, 0.7)',
        elevation: 2,
        alignSelf: 'center',
        textAlign: 'center',

        shadowColor: '#2d3436',
        shadowOffset: { width: 1, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 3,
        borderRadius: 10,

        padding: 10,
        
    }
})