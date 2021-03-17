/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Draggableball from './src/components/Draggableball';
import MapViewEx from './src/components/MapViewEx';
AppRegistry.registerComponent(appName, () => MapViewEx);
