/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';
import screen from './src/components/screen';
AppRegistry.registerComponent(appName, () => screen);
