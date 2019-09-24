import React, {Component} from 'react';
import {View, Animated, Image, Easing} from 'react-native';
import {styles} from './styles/styles.js';

export default class SpinningWheel extends Component {
  constructor() {
    super();
    this.spinValue = new Animated.Value(0);
  }
  componentDidMount() {
    this.spin();
  }
  spin() {
    this.spinValue.setValue(0);
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
    }).start(() => this.spin());
  }

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    return (
      <View style={styles.MainContainer}>
        <Animated.Image
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'white',
            transform: [{rotate: spin}],
          }}
          source={{uri: 'Insert URL Here!'}}
        />
      </View>
    );
  }
}
