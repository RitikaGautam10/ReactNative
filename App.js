/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
    <SafeAreaView />
   <View style={styles.container}>

     
    <View style={styles.helloContainer}>
      <Text style={styles.hello}>Hello</Text>
      <Text  style={styles.helloDescription}>Sign in to your account</Text>
    </View>


  <View style={styles.formContainer}>
   <View style={styles.formTopContainer}>
  
   <View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTxt}>Email</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputTxt}>Password</Text>
      </View>
      
      <Text style={styles.forgot}>Forgot Password?</Text>
   </View>

   </View>

   <View style={styles.footerContainer}>
     <View style={styles.signInBtn}>
       <Text style={styles.signIn}>Sign in</Text>
    </View>
    <Text style={styles.newAccount}>Don't have an account? Create</Text>
   </View>

   </View>



   {/* <View style={{width:'80%', backgroundColor:'gray', height:100, alignSelf:'center', marginTop:100,overflow:'visible'}}>
      <View style={{width:60, height:60, borderRadius:30, backgroundColor:'red',position:'absolute', top:0, left:0}}>
        
      </View>
      <View style={{width:60, height:60, borderRadius:30, backgroundColor:'yellow',position:'absolute', top:0, left:30}}>
        
        </View>
        <View style={{width:60, height:60, borderRadius:30, backgroundColor:'pink',position:'absolute', top:0, left:60}}>
        
        </View>
     </View> */}

   </View>
   {/* </SafeAreaView> */}
   </>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ddd',
  },
  helloContainer:{
    flex:1, 
    backgroundColor:'rgb(64,101,246)',
    alignItems:'center'
  },
  hello:{
    fontSize:35, 
    color:'white', 
    marginTop:100
  },
  helloDescription:{
    fontSize:15,
    color:'white', 
    marginTop:20
  },
  formContainer:{
    flex:2, 
    backgroundColor:'red', 
    padding:16
  },
  inputContainer:{
    width:'100%', 
    height:45, 
    marginTop:15,
    backgroundColor:'rgb(234,235,238)', 
    borderRadius:8, borderWidth:2, 
    borderColor:'#ddd',
    paddingLeft:15, 
    justifyContent:'center'
  },
  inputTxt:{
    color:'rgb(131,139,160)'
  },
  forgot:{
    color:'rgb(131,139,160)',
    fontSize:12,
    marginTop:10,
    alignSelf:'flex-end'
  },
  footerContainer:{
    justifyContent:'center',
    paddingBottom:30,
    backgroundColor:'pink'
  },
  signInBtn:{
    height:60,
    // overflow:'' 
    backgroundColor:'rgb(64,101,246)',
    alignItems:'center', 
    justifyContent:'center',
    borderRadius:10
  },
  signIn:{
    color:'white',
    fontWeight:'bold'
  },
  newAccount:{
    color:'rgb(131,139,160)',
    textAlign:'center', 
    marginTop:10
  },
  formTopContainer:{
    justifyContent:'space-between',
    flex:1,
    backgroundColor:'yellow'
  }
});

export default App;