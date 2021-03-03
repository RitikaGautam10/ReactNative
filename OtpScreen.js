import React, { Component,useRef, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const OtpScreen: () => React$Node = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
    var num1 = useRef()
    var num2 = useRef()
    var num3 = useRef()
    var num4 = useRef()
    var Otp1Focus = ()=>{
    num2.current.focus();
    }
  
    var Otp2Focus = ()=>{
    num3.current.focus();
    }
    var Otp3Focus = ()=>{
    num4.current.focus();
    }
   var Otp4Focus= ()=>{
    
    }
    return(
      <View style={styles.container}>
         <View style={styles.header}>
              <Text style={styles.headertxt}>Log into Saavn</Text>
          </View>
          <ImageBackground style={styles.image} source={require('./Images/otpimage.png')} style={styles.image}>
          <View style={styles.txtcontainer}>
             <Text style={styles.Text} >Enter your code</Text>
           </View>
          <View style={styles.otpContainer}>
      <TextInput keyboardType={'numeric'} style={styles.otp} maxLength={1}  onChange={()=>Otp1Focus()} ref={num1}/>
      <TextInput keyboardType={'numeric'} style={styles.otp} maxLength={1} onChange={()=>Otp2Focus()} ref={num2}/>
      <TextInput keyboardType={'numeric'} style={styles.otp} maxLength={1}  onChange={()=>Otp3Focus()} ref={num3}/>
      <TextInput keyboardType={'numeric'} style={styles.otp} maxLength={1} onChange={()=>Otp4Focus()} ref={num4}/>
      </View>
      <View style={styles.btnContainer}>
             <TouchableOpacity onPress={()=>alert('otp generated')} style={styles.button}>
               <Text style={styles.buttontxt}>Continue</Text>
             </TouchableOpacity>
           </View>
      </ImageBackground>
      </View>
      )
      
    };

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ddd',
  },
 header:{
   backgroundColor:'green',
   alignItems:'center',
 },
 headertxt:{
   padding:20,
   color:'white',
   fontSize:20
 },
 txtcontainer:{
   alignItems:'center',

 },
 Text:{
   fontSize:30,
   padding:40,
   margin:20
 },
 otp:{
   backgroundColor:'#f5f4f2',
   fontWeight:'600',
   alignSelf:'baseline',
   height:55,
   width:55,
   borderRadius:6,
   borderWidth:0.5,
   borderColor:'grey',
   margin:10,
   padding:15,
   textAlign:'center',
   fontSize:20
 },
 otpContainer:{
   flex:0.3,
   justifyContent:'center',
   flexDirection:'row',
 },
 btnContainer:{
  flex:0.3,
 },
 button:{
   borderColor:'green',
   borderWidth:2,
   margin:30,
   alignItems:'center'
 },
 buttontxt:{
   color:'green',
   fontSize:20,
   padding:20,
 },
 image:{
   width:'100%',
   height:'100%',
 }
});

export default OtpScreen;
