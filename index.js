/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import OtpScreen from './src/components/OtpScreen';
import ImageLoader from './src/components/ImageLoader';
import HexToRgb from './src/components/HexToRgb';
AppRegistry.registerComponent(appName, () => OtpScreen);
