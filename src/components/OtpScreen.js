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
   const [otp1,otpset1]=useState('')
   const [otp2,otpset2]=useState('')
   const [otp3,otpset3]=useState('')
   const [otp4,otpset4]=useState('')
   var num1 = useRef()
    var num2 = useRef()
    var num3 = useRef()
    var num4 = useRef()
    
    var Otp1Focus = (item)=>{
    num2.current.focus();
      otpset1(item)
    }
  
    var Otp2Focus = (item)=>{
    num3.current.focus();
    otpset2(item)
    }
    var Otp3Focus = (item)=>{
    num4.current.focus();
    otpset3(item)
    }
   var Otp4Focus= (item)=>{
    otpset4(item)
    }
    return(
      
      
      <View style={styles.container}>
       { console.log(num1)}
         <View style={styles.header}>
              <Text style={styles.headertxt}>Log into Saavn</Text>
          </View>
          <ImageBackground style={styles.image} source={require('../assets/otpimage.png')} style={styles.image}>
          <View style={styles.txtcontainer}>
             <Text style={styles.Text} >Enter your code</Text>
           </View>
          <View style={styles.otpContainer}>
      <TextInput keyboardType={'number-pad'} style={styles.otp} maxLength={1}  onChangeText={(item)=>Otp1Focus(item)} ref={num1}/>
      <TextInput keyboardType={'number-pad'} style={styles.otp} maxLength={1} onChangeText={(item)=>Otp2Focus(item)} ref={num2}/>
      <TextInput keyboardType={'number-pad'} style={styles.otp} maxLength={1}  onChangeText={(item)=>Otp3Focus(item)} ref={num3}/>
      <TextInput keyboardType={'number-pad'} style={styles.otp} maxLength={1} onChangeText={(item)=>Otp4Focus(item)} ref={num4}/>
      </View>
      <View style={styles.btnContainer}>
             <TouchableOpacity onPress={()=>alert("Otp Entered :"+`${otp1} ${otp2} ${otp3} ${otp4}`)} style={styles.button}>
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
