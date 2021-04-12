/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import GoogleSignIn from './src/components/GoogleSignIn';

AppRegistry.registerComponent(appName, () => GoogleSignIn);
