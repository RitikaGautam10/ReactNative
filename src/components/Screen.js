import React from 'react';
import {View,Text, Button, TextInput,StyleSheet,Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen';

const Tab = createBottomTabNavigator();

function Categories() {
    return (
      <View style={styles.common}>
        <Text style={styles.text}>Categories!!!</Text>

      </View>
    );
  }
  function Cart() {
    return (
      <View style={styles.common}>
        <Text style={styles.text}>My Cart</Text>
      </View>
    );
  }

function Wishlist() {
    return (
      <View style={styles.common}>
        <Text style={styles.text}>Your Wishlist!!!</Text>

      </View>
    );
  }
  function Account() {
    return (
      <View style={styles.common}>
        <Text style={styles.text}>Your Account!!!</Text>

      </View>
    );
  }
 const Screen = ({}) => {
      return (
          <NavigationContainer>
             <Tab.Navigator
          initialRouteName="HomeScreen"
          tabBarOptions={{
            activeTintColor: 'red',
            inactiveTintColor: 'black',
            labelStyle:{fontSize:13},
            style:{
                height:100,
            }
          }}
        >
          <Tab.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({focused}) => {
                if(focused)
                  return(
                        <Image style={styles.icon} source={require('../assets/homeactive.png')}/>
                    )
                    else
                    return(
                        <Image style={styles.icon} source={require('../assets/home.png')}/> 
                    )
                }
            }}
          />
          <Tab.Screen
            name="Categories"
            component={Categories}
            options={{
              tabBarLabel: 'Categories',
              tabBarIcon: ({focused}) => {
                  if(focused)
                  return(
                        <Image style={styles.icon} source={require('../assets/categoriesactive.png')}/>
                    
                    )
                    else
                    return(
                        <Image style={styles.icon} source={require('../assets/categories.png')}/> 
                    )
                }
        }}
          />
          <Tab.Screen
            name="Cart"
            component={Cart}
            options={{
              tabBarLabel: 'My Cart',
              tabBarIcon: ({focused }) => {
                if(focused)
                  return(
                        <Image style={styles.icon} source={require('../assets/cartactive.png')}/>
                    )
                    else
                    return(
                        <Image style={styles.icon} source={require('../assets/cart.png')}/> 
                    )
                }
            }}
          />
          <Tab.Screen
            name="Wishlist"
            component={Wishlist}
            options={{
              tabBarLabel: 'Wishlist',
              tabBarIcon: ({focused }) => {
                if(focused)
                  return(
                        <Image style={styles.icon} source={require('../assets/wishlistactive.png')}/>
                    )
                    else
                    return(
                        <Image style={styles.icon} source={require('../assets/wishlist.png')}/> 
                    )
                }
            }}
          />
          <Tab.Screen
            name="Account"
            component={Account}
            options={{
              tabBarLabel: 'Account',
              tabBarIcon: ({focused }) => {
                if(focused)
                  return(
                        <Image style={styles.icon} source={require('../assets/accountactive.png')}/>
                    )
                    else
                    return(
                        <Image style={styles.icon} source={require('../assets/account.png')}/> 
                    )
                }
            }}
          />
        </Tab.Navigator> 
          </NavigationContainer>
      )
  }
  
const styles = StyleSheet.create({
    text:{
        marginTop:10,
        textAlign:'center',
        fontSize:30,
        fontWeight:'bold'
    },
    icon:{
        height:30,
        width:30
    },
    common:{
        flex: 1,
         justifyContent: 'center',
          alignItems: 'center' 
    }
})
export default Screen;