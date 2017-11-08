import React from 'react';
import { StyleSheet, StatusBar, Platform, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import RootNavigation from './js/navigation/RootNavigation'

export default class App extends React.Component {
  state = {
    isLoadinComplete: false,
  }

  render() {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
        {Platform.OS === 'android' && <StatusBar barStyle="dark-content" backgroundColor="#f3f3f3" />}
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
