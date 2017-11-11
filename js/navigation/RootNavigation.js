import React from 'react';
import { View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Expo from 'expo'

import Splash from '../screens/SplashScreen'
import HomeScreen from '../screens/HomeScreen'
import MainTabNavigator from './MainTabNavigator'

const RootStackNavigator = StackNavigator(
  {
    Splash: { screen: Splash },
    Main: { screen: MainTabNavigator }
  },
  {
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: 'normal'
      }
    })
  }
);

export default class RootNavigation extends React.Component {
  render() {
    return <RootStackNavigator />;
  }
}