/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
// import WebViewEx from './src/components/WebViewEx';
// import SwitchNSlider from './src/components/SwitchNSlider';
import FetchFlatlist from './src/components/FetchFlatlist';
AppRegistry.registerComponent(appName, () => FetchFlatlist);
