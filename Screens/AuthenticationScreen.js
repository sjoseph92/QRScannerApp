import React, {Component} from 'react';
import {
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  Alert,
  View,
  Dimensions,
} from 'react-native';
import {styles} from './styles/styles.js';
import auth from '@react-native-firebase/auth';
import AnimatedTextInput from './AnimatedTextInput.js';

export default class AuthenticationScreen extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
  }

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

  // firebase function for logging in returning users
  loginUser = () => {
    const {email, password} = this.state;
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.navigate('QRScanner')
      })
      .catch(error => {
        alert(error);
      });
  };

  handleEmailChange = (newEmail) => this.setState({ email: newEmail });
  handlePasswordChange = (newPassword) => this.setState({ password: newPassword });

  render() {
    const {width} = Dimensions.get('window');

    return (
      <View style={styles.MainContainer}>
        <KeyboardAvoidingView>
          <Text style={styles.TitleText}>QRScanner</Text>
          <View style={{width: width * 0.8, alignSelf: 'center', paddingBottom: 10, borderRadius: 1, borderColor: 'black'}}>
          <AnimatedTextInput
            label="email"
            value={this.state.email}
            onChangeText={this.handleEmailChange}
          />
          <AnimatedTextInput
            label="password"
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
            secureTextEntry
          />
          </View>
          <TouchableOpacity
            style={[{width: width * 0.8}, styles.ButtonStyle]}
            activeOpacity={0.3}
            onPress={() => this.loginUser()}>
            <Text style={styles.TextStyle}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[{width: width * 0.8}, styles.ButtonStyle]}
            activeOpacity={0.3}
            onPress={() => this.loginAnonymousUser()}>
            <Text style={styles.TextStyle}>Continue Without Registering</Text>
          </TouchableOpacity>
          <Text style={styles.signUpText}>
            Dont have an account? Create one{' '}
            <Text
              style={{textDecorationLine: 'underline'}}
              activeOpacity={0.3}
              onPress={() => this.props.navigation.navigate('SignUpScreen')}>
              here
            </Text>
          </Text>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
