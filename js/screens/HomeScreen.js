//import liraries
import React, { Component } from 'react';
import { StatusBar, View, Image, Text, StyleSheet } from 'react-native';

const titlestyle = {color: 'green', fontSize: 13}
// create a component
class HomeScreen extends Component {
  static navigationOptions = {
    title: 'POWZ',
    headerTitle: 'POWZ',
    titleStyle: titlestyle
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Text>HomeScreen</Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

//make this component available to the app
export default HomeScreen;
