'use strict';
import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Dimensions,
  Text,
  Button,
} from 'react-native';
import Video from 'react-native-video';
import {styles} from './styles/styles.js';

export default class VideoPlayerScreen extends Component {
  constructor(props) {
    super(props);
    this.onLayout = this.onLayout.bind(this);
    
  }

  state = {
    orientationWidth: Dimensions.get('window').width,
    orientationHeight: Dimensions.get('window').height,
  };

  componentDidMount() {
    this.resizeVideoPlayer();
  }

  render() {
    return (
      <View onLayout={this.onLayout} style={styles.videocontainer}>
        <Text>QRScannerApp</Text>
        <Video
          ref={p => {
            this.videoPlayer = p;
          }}
          source={{uri: `${this.props.navigation.state.params.uri}`}}
          style={{
            width: this.state.orientationWidth,
            height: this.state.orientationHeight,
          }}
          controls={true}
        />
      </View>
    );
  }

  resizeVideoPlayer() {
    // Always in 16 /9 aspect ratio
    let {width, height} = Dimensions.get('screen');
    if (height >= width) {
      this.setState({
        orientationWidth: width,
        orientationHeight: width * 0.56,
      });
    } else {
      this.setState({
        orientationHeight: height * 0.8,
        orientationWidth: height * 0.8 * 1.77,
      });
    }
  }
  onLayout(e) {
    this.resizeVideoPlayer();
  }
}
