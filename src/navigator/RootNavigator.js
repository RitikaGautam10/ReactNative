import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import RouteName from './RouteName';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import colors from '../constants/Colors';
import SideDrawer from './SideDrawer';
const RootNavigator = () => {
  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();
  const DrawerScreens = () => {
    return (
      <Drawer.Navigator
        drawerContent={({navigation}) => (
          <SideDrawer navigation={navigation} />
        )}>
        <Drawer.Screen
          options={{swipeEnabled: false}}
          name={'Drawer'}
          component={TabNavigator}
        />
      </Drawer.Navigator>
    );
  };
  const StackScreens = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name={RouteName.HOME}
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={RouteName.PROFILE}
          component={Profile}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };
  const TabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size, tintColor}) => {
            const image = focused
              ? require('../assets/Images/houseActive.png')
              : require('../assets/Images/house.png');

            if (route.name === RouteName.HOME) {
              return <Image source={image} style={{width: 30, height: 30}} />;
            } else {
              return <Image source={image} style={{width: 30, height: 30}} />;
            }
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name={RouteName.HOME}
          component={StackScreens}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name={'Search'}
          component={Profile}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <DrawerScreens />
    </NavigationContainer>
  );
};

export default RootNavigator;
