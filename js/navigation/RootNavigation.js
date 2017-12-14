import React from 'react';
import { View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Expo from 'expo'

import Splash from '../screens/SplashScreen'
import HomeScreen from '../screens/HomeScreen'
import InfoScreen from '../screens/InfoScreen'
import MainTabNavigator from './MainTabNavigator'

const RootStackNavigator = StackNavigator(
  {
    Splash: { screen: Splash },
    Main: { screen: HomeScreen },
    InfoScreen: { screen: InfoScreen }
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