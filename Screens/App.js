import QRScanner from './QRScanner.js';
import AuthenticationScreen from './AuthenticationScreen.js';
import SignUpScreen from './SignUpScreen.js';
import VideoPlayerScreen from './VideoPlayerScreen.js';
import VideoListScreen from './VideoListScreen.js';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

const QRVideoNav = createMaterialTopTabNavigator(
  {
    VideoList: {screen: VideoListScreen},
    QRScanner: {screen: QRScanner},
  },
  {
    initialRouteName: 'QRScanner',
    animationEnabled: true,
    tabBarOptions: {
      showLabel: false,
      showIcon: false,
      style: {height: 0},
    },
  },
);

const App = createSwitchNavigator(
  {
    AuthenticationScreen,
    SignUpScreen,
    QRVideoNav,
    VideoPlayerScreen,
  },
  {
    initialRouteName: 'AuthenticationScreen',
  },
);

export default createAppContainer(App);
