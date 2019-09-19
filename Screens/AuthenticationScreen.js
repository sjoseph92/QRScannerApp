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
import auth from '@react-native-firebase/auth';

export default class AuthenticationScreen extends Component {
  state = {
    email: '',
    password: '',
  };

  //firebase function for authenticating anonymous users
  loginAnonymousUser = () => {
    auth()
      .signInAnonymously()
      .then(() => {
        this.props.navigation.navigate('QRScanner');
      })
      .catch(error => {
        alert(error);
      });
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <KeyboardAvoidingView>
          <Text style={styles.TitleText}>QRScanner</Text>
          <TextInput
            autoCapitalize="none"
            style={styles.textInput}
            placeholder="email"
            onChangeText={email => this.setState({email})}
            value={this.state.email}
          />
          <TextInput
            autoCapitalize="none"
            secureTextEntry
            style={styles.textInput}
            placeholder="password"
            onChangeText={password => this.setState({password})}
            value={this.state.password}
          />
          <TouchableOpacity
            style={styles.ButtonStyle}
            activeOpacity={0.3}
            onPress={() => this.props.navigation.navigate('SignUpScreen')}>
            <Text style={styles.TextStyle}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.ButtonStyle}
            activeOpacity={0.3}
            onPress={() => this.loginAnonymousUser()}>
            <Text style={styles.TextStyle}>Continue Without Registering</Text>
          </TouchableOpacity>
          <Text style={styles.signUpText}>
            Dont have an account? Create one{' '}
            <Text
              style={{textDecorationLine: 'underline'}}
              onPress={() => this.props.navigation.navigate('SignUpScreen')}>
              here
            </Text>
          </Text>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
