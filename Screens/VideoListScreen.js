import React, {Component} from 'react';
import {
  KeyboardAvoidingView,
  Text,
  Keyboard,
  TextInput,
  TouchableOpacity,
  Alert,
  View,
} from 'react-native';
import {styles} from './styles/styles.js';

export default class VideoListScreen extends Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={styles.TitleText}>QRScanner</Text>
      </View>
    );
  }
}
