import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      display: "flex",
      flexDirection:"column",
      justifyContent: "center",
      padding: 35,
      backgroundColor: '#152619'
    },
    inputStyle: {
      width: '98%',
      marginTop: 20,
      paddingTop:13,
      paddingBottom: 15,
      paddingLeft:15,
      alignSelf: "center",
      borderRadius: 50,
      borderColor: "#B7E5D2",
      borderBottomWidth: 1.5,
      borderTopWidth: 1.5,
      borderLeftWidth:1.5,
      borderRightWidth:1.5,
      height:50
    },
    preloader: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ccc'
    },
    loginBtn:{
      width:"98%",
      backgroundColor:"#A15543",
      borderRadius:50,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop: 95,
      marginBottom:35,
    },
      loginText:{
      color:"#CFD3D1",
      fontSize: 15,
      alignContent:"center",
      justifyContent:'center'
    },
    registeredText:{
      color:"#CFD3D1",
      fontSize: 15,
      alignContent:"center",
      justifyContent:'center',
      paddingLeft:25
    },
      inputView:{
      width:"82%",
      borderRadius: 19,
      height: 42,
      marginBottom:25,
      justifyContent:"center",
      padding:20,
    },
    newUser:{
      color: "#B7E5D2",
      justifyContent: 'center',
      alignContent:"center",    
      fontSize:19,
      paddingLeft:33,
      paddingBottom:15
    },
    existingUser:{
      color: "#B7E5D2",
      justifyContent: 'center',
      alignContent:"center",    
      fontSize:19,
      paddingLeft:100,
      paddingBottom:15
    },
    alreadyRegText:{
      color:"#CFD3D1",
      fontSize: 15,
      alignContent:"center",
      justifyContent:'center',
      paddingLeft:6
    },
    forgotPassword: {
      color:"#A15543",
      fontSize: 15,
      paddingTop:12,
      paddingLeft: 18,
      justifyContent: 'center'
    },
    forgot: {
      color:"#B7E5D2",
      fontSize: 19,
      paddingTop:12,
      paddingLeft: 20,
      justifyContent: 'center'
    },
    forgottenEmail: {
      width: '98%',
      marginTop: 50,
      paddingTop:13,
      paddingBottom: 15,
      paddingLeft:15,
      alignSelf: "center",
      borderRadius: 50,
      borderColor: "#B7E5D2",
      borderBottomWidth: 1.5,
      borderTopWidth: 1.5,
      borderLeftWidth:1.5,
      borderRightWidth:1.5,
      height:50
    },
    forgottenSend:{
      width:"98%",
      backgroundColor:"#A15543",
      borderRadius:50,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop: 85,
      marginBottom:35,
    }
    
  });
