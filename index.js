/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';
import SectionListScreen from './src/components/SectionListScreen';
import ModalExample from './src/components/ModalExample';
AppRegistry.registerComponent(appName, () => ModalExample);
