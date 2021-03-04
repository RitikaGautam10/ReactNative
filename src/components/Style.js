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
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Style: () => React$Node = () => {
    return (
      <>
      <SafeAreaView/>
      <View style={styles.container}>
            <ScrollView >
            
              <View style={styles.header}>
                  <Text>Product Details</Text>
              </View>
              <View style={styles.topcontainer}>
                  <View> 
                      <View style={styles.topimage}></View>
                      <Text style={styles.Description}>How To Train YourDragon The Hidden World </Text>
                      <Text style={styles.part}>Part III</Text>
                  </View>
                  <View style={styles.buttonsContainer}>
                      <TouchableOpacity style={styles.button}>
                          <Text style={styles.buttontext}>Adventure</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.button}>
                          <Text style={styles.buttontext}>Family</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.button}>
                          <Text style={styles.buttontext}>Fantasy</Text>
                      </TouchableOpacity>
                  </View>
              </View>
              <View style = {styles.lineStyle} />
  
              <View style={styles.middlecontainer}>
                  <View>
                      <Text style={styles.text}>Year</Text>
                      <Text style={styles.innertext} >2019</Text>
                  </View>
                  <View>
                      <Text style={styles.text}>Country</Text>
                      <Text style={styles.innertext}>USA</Text>
                  </View>
                  <View>
                      <Text style={styles.text}>Length</Text>
                      <Text style={styles.innertext}>112 min</Text>
                  </View>
              </View>
  
              <View style={styles.DescriptionContainer}>
                  <Text style={{fontSize:15}}>
                      About Movie
                  </Text>
                  <Text style={{fontSize:15,marginTop:16,color:'#9EAAB8'}}>
                      When Hiccup discovers Toothless isn't the only Night Fury,he must seek "The Hidden World
                      ",a secret Dragon Utopia before a hired tyrant named Grimmel finds it first.
                  </Text>
                  <Text style={{fontSize:15,marginTop:16}}> Screenshots</Text>
              </View>
              
              <ScrollView horizontal={true}>
                <View style={styles.screenshotcontainer}>
                    <View style={styles.screenshots}>
                    </View>
                    <View style={styles.screenshots}>
                    </View>
                    <View style={styles.screenshots}>
                    </View>
                    <View style={styles.screenshots}>
                    </View>
                </View>
              </ScrollView>
             
              <View style={styles.footer}>
                    <TouchableOpacity style={styles.buybutton}>
                        <Text style={styles.buttontext}>BUY TICKET</Text>
                    </TouchableOpacity>
              </View>
          
            </ScrollView>
      </View>
    
        </>
    );
  };
  
  const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'whitesmoke',
      flexDirection:'column',
    },
    header:{
     flex:1,
      padding:25,
      alignItems:'center',
      backgroundColor:'white',
      fontSize:10
    },
    topcontainer:{
      alignItems:'center',
      marginLeft:60,
      marginRight:60,
      margin:30,
    },
    topimage:{
      borderRadius:15,
      width:270,
      height:400,
      backgroundColor:'yellow',
      borderColor:'black',
      borderWidth:2
    },
    Description:{
      marginTop:20,
      fontSize:15,
      textAlign:'center'
    },
    part:{
      marginTop:10,
      textAlign:'center',
      fontSize:13
    },
    buttonsContainer:{
        marginTop:15,
        flexDirection:'row',
        alignItems:'center',
    },
    button:{
        backgroundColor:'royalblue',
        margin:4,
        borderRadius:25,
        borderColor:'white',
       
    },
    buttontext:{
        color:'white',
        padding:7,
        marginLeft:7,
        marginRight:7,
        textAlign:'center',
        fontWeight: 'bold'
    
    },
    lineStyle:{
      borderWidth: 0.5,
      borderColor:'lightgrey',
      marginTop:50,
  },
  middlecontainer:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
  },
  text:{
      textAlign:'center',
      marginTop:25,
      margin:10,
      color:'#9EAAB8'
  },
  innertext:{
      marginLeft:10,
      marginRight:10,
      marginBottom:10,
      textAlign:'center'
  },
  DescriptionContainer:{
      marginTop:30,
      marginLeft:15,
      marginRight:15,
  },
  screenshotcontainer:{
      flexDirection:'row',
      backgroundColor:'white',
  },
  screenshots:{
      width:177,
      height:110,
      marginTop:20,
      marginBottom:20,
      marginLeft:15,
      marginRight:5,
      borderRadius:12,
      borderColor:'black',
      borderWidth:2,
      backgroundColor:'red'
  },
  footer:{
      margin:25,
  },
  buybutton:{
      borderRadius:5,
      padding:7,
      backgroundColor:'royalblue',
  }
  })
  export default Style;