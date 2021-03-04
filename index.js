/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
// import ComponentEx from './src/components/ComponentEx';
//import CounterParent from './src/components/CounterParent';
import Style from './src/components/Style';
AppRegistry.registerComponent(appName, () => Style);