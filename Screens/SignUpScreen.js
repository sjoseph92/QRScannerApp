import React, {Component} from 'react';
import {
  KeyboardAvoidingView,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Alert,
  View,
} from 'react-native';
import AnimatedTextInput from './AnimatedTextInput.js';
import {styles} from './styles/styles.js';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export default class SignUpScreen extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(
      this,
    );
  }
  addUser = () => {
    firestore()
      .collection('users')
      .doc(auth().currentUser.uid)
      .set({
        videos: [],
      });
  };

  //firebase function for creating new users, checks to see if password and confirm password are equal
  createUser = () => {
    let {email, password, confirmPassword} = this.state;

    if (password !== confirmPassword) {
      this.setState({
        password: '',
        confirmPassword: '',
      });
      alert('Passwords do not match!');
    } else {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          auth().currentUser.updateProfile({
            displayName: `${this.state.firstName} ${this.state.lastName}`,
          });
        })
        .then(() => {
          this.addUser();
        })
        .then(() => {
          this.props.navigation.navigate('QRScanner');
        })
        .catch(error => {
          alert(error);
        });
    }
  };

  handleFirstNameChange = newFirstName => this.setState({firstName: newFirstName});
  handleLastNameChange = newLastName => this.setState({lastName: newLastName});
  handleEmailChange = newEmail => this.setState({email: newEmail});
  handlePasswordChange = newPassword => this.setState({password: newPassword});
  handleConfirmPasswordChange = newConfirmPassword => this.setState({confirmPassword: newConfirmPassword});

  render() {
    const {width} = Dimensions.get('window');

    return (
      <View style={styles.MainContainer}>
        <KeyboardAvoidingView>
        <Text style={styles.TitleText}>QRScanner</Text>
          <View
            style={{
              width: width * 0.8,
              alignSelf: 'center',
              paddingBottom: 10,
            }}>
            <AnimatedTextInput
              label="first name"
              value={this.state.firstName}
              onChangeText={this.handleFirstNameChange}
            />
            <AnimatedTextInput
              label="last name"
              value={this.state.lastName}
              onChangeText={this.handleLastNameChange}
              yt
            />
            <AnimatedTextInput
              label="email"
              value={this.state.email}
              onChangeText={this.handleEmailChange}
            />
            <AnimatedTextInput
              label="password"
              value={this.state.password}
              onChangeText={this.handlePasswordChange}
            />
            <AnimatedTextInput
              label="confirm password"
              value={this.state.confirmPassword}
              onChangeText={this.handleConfirmPasswordChange}
            />
          </View>
          </KeyboardAvoidingView>
          <TouchableOpacity
            style={[{width: width * 0.8}, styles.ButtonStyle]}
            activeOpacity={0.3}
            onPress={() => this.createUser()}>
            <Text style={styles.TextStyle}>Create Account</Text>
          </TouchableOpacity>
        
      </View>
    );
  }
}
