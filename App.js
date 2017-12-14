import React from 'react';
import { StyleSheet, StatusBar, Platform, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import RootNavigation from './js/navigation/RootNavigation'
import Colors from './js/constants/Colors'

export default class App extends React.Component {
  state = {
    isLoadinComplete: false,
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' backgroundColor={Colors.tintColor} />
        <RootNavigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
