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
//import auth from '@react-native-firebase/auth';

export default class App extends Component {
  // loginUser = () => {
  //   //firebase function for authorizing established users
  //   const {email, password} = this.state;
  //   auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .then(() => {
  //       alert('success');
  //     })
  //     .catch(error => {
  //       alert(error);
  //     });
  // };

  render() {
    return (
      <View style={styles.MainContainer}>
        <KeyboardAvoidingView>
          <Text style={styles.TitleText}>QRScanner</Text>
          <TouchableOpacity
            style={styles.ButtonStyle}
            activeOpacity={0.3}
            onPress={() => this.loginUser()}>
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
