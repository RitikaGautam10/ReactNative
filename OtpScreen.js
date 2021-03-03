import React, { Component } from 'react';
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
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class OtpScreen extends Component {
  constructor(props){
    super(props)
    this.state={
      pin1:"",
      pin2:"",
      pin3:"",
      pin4:""
    }
  }
  componentDidMount=()=>{
    this.refs.pin1ref.focus()
  }
  render(){
    const {pin1,pin2,pin3,pin4}=this.state
    return (
      
      <>
      <SafeAreaView/>
        <View style={styles.container}>
          <View style={styles.header}>
              <Text style={styles.headertxt}>Log into Saavn</Text>
          </View>
          <ImageBackground style={styles.image} source={require('./Images/otpimage.png')} style={styles.image}>
          <View style={styles.txtcontainer}>
            <Text style={styles.Text} >Enter your code</Text>
          </View>
          <View style={styles.otpContainer}>
            <TextInput  
            ref={"pin1ref"} 
            maxLength={1} 
            style={styles.otp}
            onChangeText={(pin1)=>{
              this.setState({pin1:pin1})
              if(pin1!=""){
                this.refs.pin2ref.focus()
              }
            }
              }
            value={pin1}/>

            <TextInput  
            ref={"pin2ref"} 
            maxLength={1} 
            style={styles.otp}
            onChangeText={(pin2)=>{
              this.setState({pin2:pin2})
              if(pin2!=""){
                this.refs.pin3ref.focus()
              }
            }}
            value={pin2}/>

            <TextInput  
            ref={"pin3ref"} 
            maxLength={1} 
            style={styles.otp}
            onChangeText={(pin3)=>{
              this.setState({pin3:pin3})
              if(pin3!=""){
                this.refs.pin4ref.focus()
              }
            }}
            value={pin3}/>

            <TextInput  
            ref={"pin4ref"} 
            maxLength={1} 
            style={styles.otp}
            onChangeText={(pin4)=>{
              this.setState({pin4:pin4})
             
            }}
            value={pin4}/>
            
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity  style={styles.button}>
              <Text style={styles.buttontxt}>Continue</Text>
            </TouchableOpacity>
          </View>
          </ImageBackground>
          </View>
     </>
    );
  }
  
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
   fontSize:20,
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
