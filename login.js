// components/login.js

import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import firebase from '../database/firebase';
import styles from './styles';



export default class Login extends Component {
  
  constructor() {
    super();
    this.state = { 
      email: '', 
      password: '',
      isLoading: false
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  userLogin = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to sign in')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        console.log(res)
        console.log('User logged-in successfully!')
        this.setState({
          isLoading: false,
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('Dashboard')
      })
      .catch(error => this.setState({ errorMessage: error.message }))
    }
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          {/* change this */}
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (
      <View style={styles.container}>  
      <KeyboardAwareScrollView style={{flex: 1, width: '100%'}} keyboardShouldPersistTaps ='always'>
        <TextInput
          style={styles.inputStyle}
          color={'#B7E5D2'}
          autoCapitalize={'none'}
          placeholder="Email"
          placeholderTextColor="#eee"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />
        <TextInput
          style={styles.inputStyle}
          color={'#B7E5D2'}
          autoCapitalize={'none'}
          placeholder="Password"
          placeholderTextColor="#eee"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />  
        <View>
          <TouchableOpacity onPress={() => this.userLogin()} style={styles.loginBtn}>
            <Text style={styles.loginText}>Log In</Text>
          </TouchableOpacity>
        </View> 

        <Text 
          style={styles.registeredText}
          onPress={() => this.props.navigation.navigate('Signup')}>
          Don't have account? Click here to sign up
        </Text>                          
        </KeyboardAwareScrollView>
      </View>
    );
  }
}
