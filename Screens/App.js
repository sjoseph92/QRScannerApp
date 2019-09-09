import React, {Component} from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  Keyboard,
  TextInput,
  TouchableOpacity,
  Alert,
  View,
  Button,
  AsyncStorage,
  Switch,
} from 'react-native';
import {styles} from './styles/styles.js';
import auth from '@react-native-firebase/auth';

export default class App extends Component {
  loginAnonymousUser = () => {
    //firebase function for authorizing established users
    
    auth()
    .signInAnonymously()
    .then(() => {
      alert('good job!')
    })
    .catch((error) => {
      alert(error)
    });
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <KeyboardAvoidingView>
          <Text style={styles.TitleText}>QRScanner</Text>
          <TouchableOpacity
            style={styles.ButtonStyle}
            activeOpacity={0.3}
            onPress={() => this.loginAnonymousUser()}>
            <Text style={styles.TextStyle}>Continue Without Registering</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.ButtonStyle}
            activeOpacity={0.3}
            onPress={() => this.props.navigation.navigate('SignUpScreen')}>
            <Text style={styles.TextStyle}>Login/Create An Account</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
