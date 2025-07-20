import { Text, StyleSheet, KeyboardAvoidingView, View, Image, Dimensions } from 'react-native'
import React, { Component } from 'react'
import MyForm from './MyForm'

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View  style={styles.logoContainer}>
            <Image source={require('../assets/favicon.png')} style={styles.logoImage} />
            <Text style={styles.loginText}>My Login App</Text>
        </View>
        <View style={styles.myform}>
            <MyForm />
        </View>
        
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#a29bfe'
    },
    logoContainer:{
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width,

    },
    logoImage:{
        height: 100,
        width: 100,
        marginTop: 20,
       

    },
    loginText:{
        fontSize: 18,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: '#d63031',
        

    }, 
    myform:{
        flex: 1,
    }
})