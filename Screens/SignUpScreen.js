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
          this.props.navigation.navigate('QRScanner');
        })
        .catch(error => {
          alert(error);
        });
    }
  };

  render() {
    const {width} = Dimensions.get('window');

    return (
      <View style={styles.MainContainer}>
        <KeyboardAvoidingView>
          <TextInput
            autoCapitalize="none"
            style={[{width: width * 0.9}, styles.textInput]}
            placeholder="First Name"
            onChangeText={firstName => this.setState({firstName})}
            value={this.state.firstName}
          />
          <TextInput
            autoCapitalize="none"
            style={[{width: width * 0.9}, styles.textInput]}
            placeholder="Last Name"
            onChangeText={lastName => this.setState({lastName})}
            value={this.state.lastName}
          />
          <TextInput
            autoCapitalize="none"
            style={[{width: width * 0.9}, styles.textInput]}
            placeholder="Email"
            onChangeText={email => this.setState({email})}
            value={this.state.email}
          />
          <TextInput
            autoCapitalize="none"
            secureTextEntry
            style={[{width: width * 0.9}, styles.textInput]}
            placeholder="Password"
            onChangeText={password => this.setState({password})}
            value={this.state.password}
          />
          <TextInput
            autoCapitalize="none"
            secureTextEntry
            style={[{width: width * 0.9}, styles.textInput]}
            placeholder="Confirm Password"
            onChangeText={confirmPassword => this.setState({confirmPassword})}
            value={this.state.confirmPassword}
          />
          <TouchableOpacity
            style={[{width: width * 0.8}, styles.ButtonStyle]}
            activeOpacity={0.3}
            onPress={() => this.createUser()}>
            <Text style={styles.TextStyle}>Create Account</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
