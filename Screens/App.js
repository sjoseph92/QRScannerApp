import QRScanner from './QRScanner.js';
import AuthenticationScreen from './AuthenticationScreen.js';
import VideoPlayerScreen from './VideoPlayerScreen.js'
import {createSwitchNavigator, createAppContainer} from 'react-navigation';

const App = createSwitchNavigator(
  {
    AuthenticationScreen,
    QRScanner,
    VideoPlayerScreen
  },
  {
    initialRouteName: 'AuthenticationScreen',
  },
);

export default createAppContainer(App);
