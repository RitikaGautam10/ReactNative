/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';
//import SectionListEx from './src/components/SectionListEx';
//import ClipboardEx from './src/components/ClipboardEx';
//import AlertEx from './src/components/AlertEx';
//import ActionSheetEx from './src/components/ActionSheetEx';
import ClipboardExample from './src/components/ClipboardExample';
//import BackPressExample from './src/components/BackPressExample';
AppRegistry.registerComponent(appName, () => ClipboardExample);
