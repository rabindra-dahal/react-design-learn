import { Text, StyleSheet, View, ImageBackground } from 'react-native'
import React, { Component } from 'react'
import HeroText from './HeroText'

export default class HeroImage extends Component {
  render() {
    return (
        <ImageBackground source={require('../assets/img2.jpeg')} style={styles.hero}>
            <HeroText />
        </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
    hero: {
        height: 200,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }

})