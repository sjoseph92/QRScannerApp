import React, {Component} from 'react';
import SpinningWheel from './SpinningWheel.js';
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
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export default class VideoListScreen extends Component {
  state = {
    isRegisteredUser: '',
    scannedVideos: [],
  };

  componentDidMount() {
    firestore()
      .doc(`users/${auth().currentUser.uid}`)
      .get()
      .then(results => {
        if (results.exists === false) {
          this.setState({isRegisteredUser: false});
        } else {
          this.setState({
            isRegisteredUser: true,
            scannedVideos: results._data.videos,
          });
        }
      })
      .catch(error => {
        alert(error);
      });
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        {!this.state.isRegisteredUser ? (
          <View>
            <TouchableOpacity
              style={styles.ButtonStyle}
              activeOpacity={0.3}
              onPress={() => this.props.navigation.navigate('SignUpScreen')}>
              <Text style={styles.TextStyle}>Create an account!</Text>
            </TouchableOpacity>
            <SpinningWheel />
          </View>
        ) : (
          <View>
            <Text style={styles.signUpText}>Welcome</Text>
          </View>
        )}
      </View>
    );
  }
}
