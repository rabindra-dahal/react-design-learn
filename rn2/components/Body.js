import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import CompoImage from './CompoImage'

export default class Body extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.column1}>
          <CompoImage imageSource={require('../assets/img3.jpeg')} />
        </View>
        <View style={styles.column2}>
          <CompoImage imageSource={require('../assets/img4.jpg')} />
        </View>
        <View style={styles.full}>
          <CompoImage imageSource={require('../assets/img5.jpeg')} />
        </View>


        <View style={styles.column2}>
          <CompoImage imageSource={require('../assets/img6.jpeg')} />
        </View>
        <View style={styles.column1}>
          <CompoImage imageSource={require('../assets/img2.jpeg')} />
        </View>
        <View style={styles.full}>
          <CompoImage imageSource={require('../assets/img3.jpeg')} />
        </View>


        <View style={styles.column1}>
          <CompoImage imageSource={require('../assets/img6.jpeg')} />
        </View>
        <View style={styles.column2}>
          <CompoImage imageSource={require('../assets/img2.jpeg')} />
        </View>
        <View style={styles.full}>
          <CompoImage imageSource={require('../assets/img3.jpeg')} />
        </View>

        
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',

    },
    column1: {
        flex: 1,
        padding: 5,

    },
    column2: {
        flex: 2,
        padding: 5
    },
    full:{
        padding: 5,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
})