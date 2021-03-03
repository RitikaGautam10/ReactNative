import React, { Component} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  ActivityIndicator,
} from 'react-native';

class ImageLoader extends Component{
 constructor(){
   super()
   this.state={
    loader:true
   }
   
 }
componentDidMount(){
  setTimeout(()=>{
    this.setState({
      loader:false
    })
  },5000)
}

render(){
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {
          this.state.loader ? 
          <View>
            <Text style={styles.text}>Image will load after 5 minutes</Text>
          <ActivityIndicator size="large" color="#00ff00"/>
          </View>
          :
          <View>
             <Image style={styles.image} source={{uri:'https://i.pinimg.com/originals/4c/0e/fd/4c0efdd7be898125de1a6bf83f041f67.png'}}></Image>
          </View>
        }
      
      </View>
    </SafeAreaView>
  );
};
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor:'#C39BD3'
  },
  text:{
    fontSize:25,
    padding:15,
    margin:20,
    textAlign:'center'
  },
  image:{
    margin:20,
    padding:20,
    alignItems:'center',
    width:350,
    height:600,
  }
});

export default ImageLoader;
