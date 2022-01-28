import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';
import RootNavigator from './src/navigator/RootNavigator';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <RootNavigator />
    </SafeAreaView>
  );
};

export default App;
