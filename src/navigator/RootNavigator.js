import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import RouteName from './RouteName';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import SideDrawer from './SideDrawer';
const RootNavigator = () => {
  const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();
  const DrawerScreens = () => {
    return (
      <Drawer.Navigator
        initialRouteName={'DrawerNavigation'}
        screenOptions={{
          headerShown: false,
        }}
        drawerContent={({navigation}) => (
          <SideDrawer navigation={navigation} />
        )}>
        <Drawer.Screen
          options={{swipeEnabled: false}}
          name={RouteName.MAINSTACK}
          component={StackScreens}
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

  return (
    <NavigationContainer>
      <DrawerScreens />
    </NavigationContainer>
  );
};

export default RootNavigator;
