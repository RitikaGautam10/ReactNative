/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import OtpScreen from './OtpScreen';
import ImageLoader from './ImageLoader';
import HexToRgb from './HexToRgb';
AppRegistry.registerComponent(appName, () => OtpScreen);
