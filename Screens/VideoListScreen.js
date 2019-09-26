import React, {Component} from 'react';
import SpinningWheel from './SpinningWheel.js';
import {Text, Dimensions, TouchableOpacity, Alert, View, SafeAreaView} from 'react-native';
import {styles} from './styles/styles.js';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export default class VideoListScreen extends Component {
  state = {
    isRegisteredUser: '',
    videos: [],
  };

  componentDidMount() {
    firestore()
      .doc(`users/${auth().currentUser.uid}`)
      .get()
      .then(results => {
        if (!results.exists) {
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
    const {width} = Dimensions.get('window');
    const {isRegisteredUser, videos} = this.state;

    return (
      <View style={styles.MainContainer}>
        <SafeAreaView>
          <View style={styles.header}>
            <Text style={styles.headerText}>QRScanner</Text>
          </View>
        </SafeAreaView>
        {!isRegisteredUser ? (
          <View>
            <TouchableOpacity
              style={[{width: width * 0.8}, styles.ButtonStyle]}
              activeOpacity={0.3}
              onPress={() => this.props.navigation.navigate('SignUpScreen')}>
              <Text style={styles.TextStyle}>Create an account!</Text>
            </TouchableOpacity>
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
