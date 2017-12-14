import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from './../constants/Colors'

import HomeScreen from './../screens/HomeScreen'
import HistoryScreen from './../screens/HistoryScreen'

export default TabNavigator(
  {
    Home: { screen: HomeScreen },
    // History: { screen: HistoryScreen }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state
        let iconName

        switch (routeName) {
          case 'Home':
            Platform.OS === 'ios'
              ? iconName = `ios-flash${focused ? '' : '-outline'}`
              : iconName = 'md-flash'
            break;
          case 'Calculator':
            Platform.OS === 'ios'
              ? iconName = `ios-calculator${focused ? '' : '-outline'}`
              : iconName = 'md-calculator'
            break;
          case 'History':
            Platform.OS === 'ios'
              ? iconName = `ios-list-box${focused ? '' : '-outline'}`
              : iconName = null
            break;
        }

        return (
          <Ionicons
            name={iconName}
            size={32}
            style={{ marginTop: 6 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        )
      }
    }),
    tabBarPosition: 'bottom',
    tabBarComponent: TabBarBottom,
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: 'gray',
      inactiveTintColor: 'gray',
    }
  }
)