//import liraries
import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import Colors from './../constants/Colors'

const titlestyle = { color: 'green', fontSize: 13 }

// create a component
class HistoryScreen extends Component {
  static navigationOptions = {
    headerTitle: <Image source={require('./../../assets/powz.png')} style={{height: 20, width: 90}} resizeMode={'contain'} />,
    title: 'History',
    titleStyle: {color: 'white'},
    headerStyle: {
      backgroundColor: Colors.tintColor,
      borderWidth: 0
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>HistoryScreen</Text>
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
export default HistoryScreen;
