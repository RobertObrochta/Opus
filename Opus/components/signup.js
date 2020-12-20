import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator, SafeAreaView, TouchableOpacity} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import firebase from '../database/firebase';
import styles from './styles';
import PassStrength from "./passstrength";


const MAX_LEN = 25,
  MIN_LEN = 6,
  PASS_LABELS = ["Too Short", "Weak", "Normal", "Strong", "Secure"];

export default class Signup extends Component {
  
  constructor() {
    super();
    this.state = { 
      displayName: '',
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

  registerUser = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Please fill out account information!')
    } 
    else if(this.state.displayName === ""){
      Alert.alert("Please enter a username")
    }
    else if(this.state.password.length < 6){
      Alert.alert("Password should be longer than 6 characters")
    }
    else if(this.state.email === ""){
      Alert.alert("Enter a valid email to sign up")
    }
    else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        res.user.updateProfile({
          displayName: this.state.displayName
        })
        console.log('Welcome!')
        this.setState({
          isLoading: false,
          displayName: '',
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('Dashboard')
      })
      .catch(error => this.setState({ errorMessage: error.message }, Alert.alert("Email already in use")),
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
          <Text style={styles.newUser}>New user? Create an account</Text>
            <TextInput
              style={styles.inputStyle}
              color={'#B7E5D2'}
              autoCapitalize={'none'}
              placeholder="Username"
              placeholderTextColor="#eee"
              value={this.state.displayName}
              onChangeText={(val) => this.updateInputVal(val, 'displayName')}
            />      
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
              maxLength={25}
              secureTextEntry={true}
            />
                <PassStrength
                  showLabels
                  password={this.state.password}
                  maxLength={MAX_LEN}
                  minLength={MIN_LEN}
                  labels={PASS_LABELS}
                  style={styles.passwordStrength}
                  />
            <View>
              <TouchableOpacity onPress={() => this.registerUser()} style={styles.loginBtn}>
                <Text style={styles.loginText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
            <Text 
              style={styles.registeredText}
              onPress={() => this.props.navigation.navigate('Opus')}>
              Already registered? Click here to log in
            </Text>  
          </KeyboardAwareScrollView>                        
      </SafeAreaView>
    );
  }
}