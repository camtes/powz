import React from 'react';
import { StackNavigator } from 'react-navigation';

import Splash from '../screens/SplashScreen'
import Slides from '../screens/SlidesScreen'
import MainTabNavigator from './MainTabNavigator'

const RootStackNavigator = StackNavigator(
  {
    Splash: { screen: Splash },
    Slides: { screen: Slides },
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