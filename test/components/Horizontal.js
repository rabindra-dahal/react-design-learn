import { Text, StyleSheet, View, ScrollView, Dimensions} from 'react-native'
import React, { Component } from 'react'

export default class Horizontal extends Component {
  render() {
    return (
      <ScrollView style={styles.container} horizontal={true} pagingEnabled={true}>
        <View style={[styles.outer]} >
            <Text style={styles.innerText}>Welcome to My Blue Screen.</Text>
        </View>
        <View style={[styles.outer, styles.green]} >
            <Text style={styles.innerText}>Welcome to My Green Screen.</Text>
        </View>
        <View style={[styles.outer, styles.orange]} >
            <Text style={styles.innerText}>Welcome to My orange Screen.</Text>
        </View>
        <View style={[styles.outer, styles.pink]} >
            <Text style={styles.innerText}>Welcome to My Pink Screen.</Text>
        </View>


      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
    container:{
    },
    outer:{
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width,

    },
    innerText: {
        fontSize: 20,
        color: 'red',
        fontStyle: 'italic'

    },
    green:{
        backgroundColor: 'green',

    },
    orange:{
        backgroundColor: 'orange',
    },
    pink:{
        backgroundColor: 'pink',
    },

})