import { Text, StyleSheet, View , TextInput, TouchableOpacity} from 'react-native'
import React, { Component } from 'react'

export default class MyForm extends Component {
  render() {
    return (
      <View style={styles.formcontainer}>
        <TextInput placeholder='User Name' style={styles.input} />
        <TextInput placeholder='Password' style={styles.input} secureTextEntry />
        <TouchableOpacity style={styles.buttonContainer} onPress={() => null } >
            <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    formcontainer:{
        flex: 1,
    },
    input:{
        height: 40,
        paddingLeft: 10,
        marginBottom: 1,
        backgroundColor: 'yellow',
        margin: 10,
        color: 'red',
    },
    buttonContainer:{
        backgroundColor: 'pink',
        paddingVertical: 15,
        margin: 10,
    },
    buttonText:{
        textAlign: 'center',
        color: 'green',
    }
})