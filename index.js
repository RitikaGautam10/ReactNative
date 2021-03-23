/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import Screen from './src/components/Screen';
import SignIn from './src/components/SignIn';
import JoinIn from './src/components/JoinIn';
import mainScreen from './src/components/mainScreen';
import Navigation from './src/components/Navigation';
AppRegistry.registerComponent(appName, () => Screen);
