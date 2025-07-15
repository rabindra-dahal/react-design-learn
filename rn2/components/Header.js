import { Text, StyleSheet, View, Image, Dimensions } from 'react-native'
import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Image 
            source={require('../assets/logo.png')}
            style={styles.logo}
        />
        <Text style={styles.title}>My Online Shopping</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width,
        backgroundColor: '#fff',
        borderBottomWidth: 4,
        borderBottomColor: '#ccc',
        padding: 20,
        marginTop: 20,

    },
    logo: {
        width: 40,
        height: 40,
        marginTop: 20

    },
    title:{
        fontSize: 12,
        fontStyle: 'italic',
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 20,
        color: '#000',
        



    }
})