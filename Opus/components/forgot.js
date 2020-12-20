// replaced the login.js file to make the header say "Opus" instead of "Login"

import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator, TouchableOpacity, SafeAreaView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ref } from 'yup';
import firebase from '../database/firebase';
import styles from './styles';

export default class Forgot extends Component {
  
  constructor() {
    super();
    this.state = { 
      email: '',
      isLoading: false
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  passwordReset = () => {
    if(this.state.email === '') {
      Alert.alert('Enter your email address')
    } 
    else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .sendPasswordResetEmail(this.state.email)
      .then((res) => {
        console.log(res)
        console.log('Reset email sent successfully!')
        this.setState({
          isLoading: false,
          email: ''
        })
        this.props.navigation.navigate('Opus')
      })
      .catch(error => this.setState({ errorMessage: error.message }, Alert.alert("Email has not been registered with an account")), 
        this.setState({isLoading: false}))
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
      <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView style={{flex: 1, width: '100%'}} keyboardShouldPersistTaps ='always'>
      <Text style={styles.forgot}>Please enter your email address</Text>  
        <TextInput
          style={styles.inputStyle}
          color={'#B7E5D2'}
          autoCapitalize={'none'}
          placeholder="Email"
          placeholderTextColor="#eee"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />
        <View>
            {/* will go to forgot password and send email */}
            {/* change onPress */}
          <TouchableOpacity onPress={() => this.passwordReset()} style={styles.forgottenSend}>
            <Text style={styles.loginText}>Send Password Reset</Text>
          </TouchableOpacity>
        </View> 
 
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}