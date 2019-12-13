/**
 * @format
 */
import { enableScreens } from 'react-native-screens';
enableScreens();

import {AppRegistry} from 'react-native';

import './js/i18n';

import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
