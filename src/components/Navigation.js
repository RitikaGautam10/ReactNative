import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import EmployeeListing from './EmployeeListing';
import AddEmployee from './AddEmployee';
const Stack = createStackNavigator();

class Navigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="EmployeeListing" component={EmployeeListing} />
          <Stack.Screen name="AddEmployee" component={AddEmployee} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigation;
