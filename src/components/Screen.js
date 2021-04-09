import React, {Component} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
import Location from './Location';
import Vedio from './Vedio';
import Song from './Song';
class Screen extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Location">
          <Stack.Screen name="Location" component={Location} />
          <Stack.Screen name="Vedio" component={Vedio} />
          <Stack.Screen name="Song" component={Song} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default Screen;
