import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { TextInput, StyleSheet, Text, View, Button, Alert, SafeAreaView, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Opus from './components/opus';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
import Profile from './components/profile';
import Forgot from './components/forgot';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Opus"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#416C4F',
        },
        headerTintColor: '#ccc',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        
      }}>
      <Stack.Screen 
        name="Signup" 
        component={Signup}
        options={{ title: 'Opus' }}
        />       
      <Stack.Screen 
        name="Opus" 
        component={Opus} 
        options={
          {title: 'Opus'},
        { headerLeft: null }}
      />
      <Stack.Screen 
       name="Dashboard" 
       component={Dashboard} 
       options={
         { title: 'Home' },
         { headerLeft: null } 
       }
      />
      <Stack.Screen 
       name="Profile" 
       component={Profile} 
       options={
         { title: 'Profile' },
         { headerLeft: null } 
       }
      />
      <Stack.Screen 
       name="Forgot Password" 
       component={Forgot} 
       options={
         { title: 'Forgot Password' }
       }
      /> 
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
