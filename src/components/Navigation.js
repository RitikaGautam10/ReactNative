import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SignUpScreen from './SignUpScreen';
import HomeScreen from './HomeScreen';
const Stack = createStackNavigator();
class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFieldEmpty: true,
    };
  }
  componentDidMount() {
    this.readData();
  }

  readData = async () => {
    try {
      const data = await AsyncStorage.getItem('userData');
      if (data !== null) {
        console.log('data');
        this.setState({isFieldEmpty: false});
      } else {
        console.log('nulldata');
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={
            this.state.isFieldEmpty ? 'SignUpScreen' : 'HomeScreen'
          }>
          <Stack.Screen
            options={{headerShown: false}}
            name={'SignUpScreen'}
            component={SignUpScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name={'HomeScreen'}
            component={HomeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default Navigation;
