import QRScanner from './QRScanner.js';
import AuthenticationScreen from './AuthenticationScreen.js';
import SignUpScreen from './SignUpScreen.js'
import VideoPlayerScreen from './VideoPlayerScreen.js';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';

const App = createSwitchNavigator(
  {
    AuthenticationScreen,
    SignUpScreen,
    QRScanner,
    VideoPlayerScreen,
  },
  {
    initialRouteName: 'AuthenticationScreen',
  },
);

export default createAppContainer(App);
