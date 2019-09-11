'use strict';
import React, {PureComponent} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Dimensions
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {styles} from './styles/styles.js';

export default class QRScanner extends PureComponent {
  render() {
    const {height, width} = Dimensions.get('window');
    const maskRowHeight = Math.round((height - 300) / 20);
    const maskColWidth = (width - 300) / 2;
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <View style={styles.header}>
            <Text style={styles.headerText}>QRScanner</Text>
          </View>
        </SafeAreaView>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          captureAudio={false}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onBarCodeRead={barcode => {
            this.props.navigation.navigate('VideoPlayerScreen', {
              uri: barcode.data,
            });
          }}
        />
        <View style={styles.maskOutter}>
          <View
            style={[{flex: maskRowHeight}, styles.maskRow, styles.maskFrame]}
          />
          <View style={[{flex: 30}, styles.maskCenter]}>
            <View style={[{width: maskColWidth}, styles.maskFrame]} />
            <View style={styles.maskInner} />
            <View style={[{width: maskColWidth}, styles.maskFrame]} />
          </View>
          <View
            style={[{flex: maskRowHeight}, styles.maskRow, styles.maskFrame]}
          />
        </View>
      </View>
    );
  }
}
