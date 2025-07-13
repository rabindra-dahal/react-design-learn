import { Text, StyleSheet, View, ScrollView, Dimensions } from 'react-native'
import React, { Component } from 'react'

export default class Horizontal extends Component {
  render() {
    return (
      <ScrollView horizontal={true} pagingEnabled={true} style={styles.container}>
        <View style={styles.outer}>
            <Text style={styles.innerText}>Welcome to Library App.</Text>
        </View>
        <View style={[styles.outer, styles.red]}>
            <Text style={styles.innerText}>Discover more videos.</Text>
        </View>
        <View style={[styles.outer, styles.green]}>
            <Text style={styles.innerText}>Search some receipes.</Text>
        </View>
      </ScrollView>
    )
  }
};

const styles = StyleSheet.create({
    container:{

    },
    outer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: '#007bb6',

    },
    innerText:{
        fontSize: 23,
        fontWeight: 'bold',
        color: 'white',
    },
    red: {
        backgroundColor: '#dd4b39',
    },
    green: {
        backgroundColor: '#27ae60',
    }
})