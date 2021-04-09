/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Setup from './src/components/Setup';
import messaging from '@react-native-firebase/messaging';
messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  console.log(remoteMessage);
});
AppRegistry.registerComponent(appName, () => Setup);
