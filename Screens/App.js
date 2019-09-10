import QRScanner from './QRScanner.js';
import AuthenticationScreen from './AuthenticationScreen.js';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';

const App = createSwitchNavigator(
  {
    AuthenticationScreen,
    QRScanner,
  },
  {
    initialRouteName: 'AuthenticationScreen',
  },
);

export default createAppContainer(App);
