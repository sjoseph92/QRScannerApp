import React, {Component} from 'react';
import {
  KeyboardAvoidingView,
  Text,
  Keyboard,
  TextInput,
  TouchableOpacity,
  Alert,
  View,
  Dimensions,
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

  // firebase function for logging in returning users
  loginUser = () => {
    const {email, password} = this.state;
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.navigate('QRScanner');
      })
      .catch(error => {
        alert(error);
      });
  };

  render() {
    const {width} = Dimensions.get('window');

    return (
      <View style={styles.MainContainer}>
        <KeyboardAvoidingView>
          <Text style={styles.TitleText}>QRScanner</Text>
          <TextInput
            autoCapitalize="none"
            style={[{width: width * 0.9}, styles.textInput]}
            placeholder="email"
            onChangeText={email => this.setState({email})}
            value={this.state.email}
          />
          <TextInput
            autoCapitalize="none"
            secureTextEntry
            style={[{width: width * 0.9}, styles.textInput]}
            placeholder="password"
            onChangeText={password => this.setState({password})}
            value={this.state.password}
          />
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
