import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class FetchData extends Component{
    constructor(props){
        super(props)
        this.state={
            data:"",
           showLoader:false
        };
    }
    

Onload = async () => {
    this.setState({
        showLoader:true,
    });
    try{
        const response= await fetch('https://reqres.in/api/users',{
            method:'GET',
        });
        const json=await response.json();
        setTimeout(() => {
            this.setState({
                showLoader: false,
                data:json.data
            });
        }, 2000);
        
    }
    catch(error){
        alert('Unable to fetch data');
    }
};

dataStyling = ({item}) => {
    return (
      <View style={styles.dataContainer}>
        <Image style={styles.avatar} source={{ uri: item.avatar}}  />
        <View>
            <Text style={styles.id}>
                ID : {item.id}
            </Text>
            <Text style={styles.name}>
                {item.first_name} {item.last_name}
            </Text>
            <Text style={styles.email}>
                {item.email}
            </Text>
        </View>
      </View>
    );
  };
  render(){
        return(
            <>
            <SafeAreaView/>
            <View style={styles.container}>
            <ScrollView>
                <View>
                {
                !(this.state.showLoader) && !(this.state.data) ? (
                    <View style={styles.btncontainer}>
                        <TouchableOpacity style={styles.button} onPress={this.Onload}>
                            <Text style={styles.buttontxt}>FETCH DATA</Text>
                        </TouchableOpacity>
                    </View>
                )
                :(
                     <View>
                         <ActivityIndicator animating={this.state.showLoader} style={styles.activityIndicator} size="large" color='blue'/>
                     </View>
                )
                }
                </View>
                <View>
                    <FlatList
                        data={this.state.data}
                        renderItem={this.dataStyling}
                        keyExtractor={item => item.id}
                    />
                </View>
            
            </ScrollView>
            </View>
            </>
            
        )
    }
}
const styles = StyleSheet.create({
  container:{
      flex:1,
      margin:20
  },
  btncontainer:{
    marginTop:200,
    padding:30,
  },
  button:{
    borderColor:'green',
    borderWidth:2,
    margin:10,
    borderRadius:20,
    backgroundColor:'dodgerblue'
  },
  activityIndicator:{
      marginTop:20,
      alignItems:'center'
  },
  dataContainer: {
    flexDirection: 'column',
    padding: 10,
    backgroundColor: 'lavender',
    borderRadius:20,
    borderColor:'black',
    borderWidth:2,
    alignItems: "center",
    margin: 15,
  },
  id:{
      textAlign:'center',
      fontSize:20,
  },
  avatar:{
      width:120,
      height:120,
      margin:15,
  },
  name: {
   color:'firebrick',
   textAlign:'center',
    fontSize: 20,
  },
  email: {
    color: 'indigo',
    fontStyle:'italic',
    fontSize:17,
    textAlign:'center'
  },
  buttontxt:{
    color:'white',
    fontSize:20,
    padding:20,
    textAlign:'center'
  },
  
});
export default FetchData;