'use strict';
import React, {PureComponent} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, SafeAreaView} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {styles} from './styles/styles.js';

export default class QRScanner extends PureComponent {
  render() {
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
            alert(barcode.data);
            // this.props.navigation.navigate('VideoPlayerScreen', {
            //   uri: barcode.data,
            // });
          }}
        />
      </View>
    );
  }
}
