import { Text, StyleSheet, View, Image, Dimensions } from 'react-native'
import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.headerLogo} />
        <Text style={styles.headerText}>Online Shopping App</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        height: 80,
        backgroundColor: '#fff',
        borderBottomWidth: 2,
        borderBottomColor: '#ccc',
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width,
    },
    headerLogo:{
        height: 40,
        width: 40,
        marginTop: 20,
    },
    headerText:{
        fontSize: 15,
        marginLeft: 5,
        marginTop: 20,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: '#a29bfe',
    }
});