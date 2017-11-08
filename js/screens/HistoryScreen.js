//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
const titlestyle = { color: 'green', fontSize: 13 }

// create a component
class HistoryScreen extends Component {
  static navigationOptions = {
    title: 'History',
    headerTitle: 'HISTORY',
    titleStyle: titlestyle
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
