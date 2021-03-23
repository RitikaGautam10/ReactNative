import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from './SignIn';
import mainScreen from './mainScreen';
import JoinIn from './JoinIn';
import Screen from './Screen';
const Stack = createStackNavigator();
class Navigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {/* <Stack.Screen name={'Screen'} component={Screen} /> */}
          <Stack.Screen name={'mainScreen'} component={mainScreen} />
          <Stack.Screen name={'SignIn'} component={SignIn} />
          <Stack.Screen name={'JoinIn'} component={JoinIn} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default Navigation;
