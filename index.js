/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import Location from './src/components/Location';
import Screen from './src/components/Screen';
AppRegistry.registerComponent(appName, () => Screen);
