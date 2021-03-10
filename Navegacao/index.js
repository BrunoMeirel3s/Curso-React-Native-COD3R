/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Navegacao from './src/navegacao'; //Navegação será o componente utilizado inicialmente para navegar entre as telas
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Navegacao);
