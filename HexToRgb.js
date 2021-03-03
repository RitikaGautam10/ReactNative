import React, { Component, useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ImageBackground,

} from 'react-native';

class HexToRgb extends Component{
    constructor(){
        super()
        this.state={
            hex:'',
            r:'',
            g:'',
            b:'',
        }
        
    }
    onChange = (text) => {
        this.setState({ hex: text });
     }
     hexToRgb=(hex)=> {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        this.setState(result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        } : alert('Not a Valid Hex Code'));
      }
    render(){
        return(
            <>
            <SafeAreaView/>
            <View style={styles.container}>
            <ImageBackground style={styles.image} source={require('./Images/heximage.jpg')}>
                <View>
                
                <View style={styles.topcontainer}>
                    <Text style={styles.txt}>HEX CODE CONVERTER </Text>
                    <TextInput 
                    style={styles.txtinput} 
                    placeholder="Enter HEX Code"
                    onChangeText={this.onChange}
                    >
                    </TextInput>
                    
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity 
                     style={styles.button}
                     onPress = {
                        () => this.hexToRgb(this.state.hex)
                     }>
                        <Text style={styles.buttontxt}>Validate HEX Code</Text>
                    </TouchableOpacity>
                    
                </View>
                <View style={styles.txtContainer}> 
                <Text style={styles.txt}>R : {this.state.r}</Text>
                <Text style={styles.txt}>G : {this.state.g}</Text>
                <Text style={styles.txt}>B : {this.state.b}</Text>
                </View>

                <View style={{flex:2,
                    backgroundColor:`rgb(${this.state.r}, ${this.state.g}, ${this.state.b})`,
                    padding:20,
                    margin:30}}>

                </View>
               
                </View>
                </ImageBackground>
            </View>
            </>
        );
    };
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column',
    },
    topcontainer:{
        marginLeft:30,
        marginRight:30,
        marginTop:50,

    },
    txtinput:{
        height: 50, 
        borderColor: 'black', 
        borderWidth: 2,
        borderRadius:10,
        padding:10,
        textAlign:'center',
        fontSize:20
    },
    btnContainer:{
        margin:15,
        alignItems:'center',
    },
    button:{
        borderColor:'green',
        borderWidth:2,
        margin:10,
        alignItems:'center',
        borderRadius:15,
        backgroundColor:'green'
      },
      buttontxt:{
        color:'white',
        fontSize:20,
        padding:15,
      },
      txt:{
          alignItems:'center',
          fontSize:30,
          padding:15,
          textAlign:'center',
          fontWeight:'bold'
      },
      txtContainer:{
          marginLeft:30,
          marginRight:30,
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center',
          
      },
      image:{
          width:'100%',
          height:'100%',
          opacity:1
      }
  });
export default HexToRgb;