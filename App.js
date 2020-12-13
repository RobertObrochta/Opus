import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TextInput, StyleSheet, Text, View, Button, Alert, SafeAreaView, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


export default class App extends React.Component {
  state={
    email:"",
    password:""
  }
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>PracLog</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#416C4F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#B7E5D2",
    marginBottom:45
  },
  inputView:{
    width:"82%",
    backgroundColor:"#B7E5D2",
    borderRadius: 19,
    height: 42,
    marginBottom:25,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"#424141"
  },
  forgot:{
    color:"#CFD3D1",
    fontSize:14
  },
  loginBtn:{
    width:"82%",
    backgroundColor:"#A15543",
    borderRadius:19,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:145,
    marginBottom:35
  },
  loginText:{
    color:"#CFD3D1",
    fontSize: 16,
  }
});