import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { TextInput, StyleSheet, Text, View, Button, Alert, SafeAreaView, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Signup"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#416C4F',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        
      }}>
      <Stack.Screen 
        name="Signup" 
        component={Signup}
        options={{ title: 'Create an account' }}
        />       
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={
          {title: 'Log In'},
          {headerLeft: null}
        }
      />
      <Stack.Screen 
       name="Dashboard" 
       component={Dashboard} 
       options={
         { title: 'Home' },
         {headerLeft: null} 
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







//       <SafeAreaView style={styles.container}>
//         <Text style={styles.logo}>PracLog</Text>
//         <View style={styles.inputView} >
//           <TextInput  
//             style={styles.inputText}
//             placeholder="Email..." 
//             placeholderTextColor="#003f5c"
//             onChangeText={text => this.setState({email:text})}/>
//         </View>
//         <View style={styles.inputView} >
//           <TextInput  
//             secureTextEntry
//             style={styles.inputText}
//             placeholder="Password..." 
//             placeholderTextColor="#003f5c"
//             onChangeText={text => this.setState({password:text})}/>
//         </View>
//         <TouchableOpacity>
//           <Text style={styles.forgot}>Forgot Password?</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.loginBtn}>
//           <Text style={styles.loginText}>Log In</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Text style={styles.loginText}>Sign Up</Text>
//         </TouchableOpacity>
//       </SafeAreaView>
//     );
//   }
// }

