//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from './../constants/Colors'

// create a component
class SplashScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.tintColor,
  },
});

//make this component available to the app
export default SplashScreen;
