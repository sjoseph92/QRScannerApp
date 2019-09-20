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

export default class SignUpScreen extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  //firebase function for creating new users, checks to see if password and confirm password are equal
  createUser = () => {
    let {email, password, confirmPassword} = this.state;

    if (password !== confirmPassword) {
      this.setState({password: ''})
      this.setState({confirmPassword: ''})
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
          this.props.navigation.navigate('QRScanner');
        })
        .catch(error => {
          alert(error);
        });
    }
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <TextInput
          autoCapitalize="none"
          style={styles.textInput}
          placeholder="First Name"
          onChangeText={firstName => this.setState({firstName})}
          value={this.state.firstName}
        />
        <TextInput
          autoCapitalize="none"
          style={styles.textInput}
          placeholder="Last Name"
          onChangeText={lastName => this.setState({lastName})}
          value={this.state.lastName}
        />
        <TextInput
          autoCapitalize="none"
          style={styles.textInput}
          placeholder="Email"
          onChangeText={email => this.setState({email})}
          value={this.state.email}
        />
        <TextInput
          autoCapitalize="none"
          secureTextEntry
          style={styles.textInput}
          placeholder="Password"
          onChangeText={password => this.setState({password})}
          value={this.state.password}
        />
        <TextInput
          autoCapitalize="none"
          secureTextEntry
          style={styles.textInput}
          placeholder="Confirm Password"
          onChangeText={confirmPassword => this.setState({confirmPassword})}
          value={this.state.confirmPassword}
        />
        <TouchableOpacity
          style={styles.ButtonStyle}
          activeOpacity={0.3}
          onPress={() => this.createUser()}>
          <Text style={styles.TextStyle}>Create Account</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
