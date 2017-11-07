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
    History: { screen: HistoryScreen }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state
        let iconName

        switch (routeName) {
          case 'Home':
            iconName = 
              Platform.OS === 'ios'
                ? `ios-flash${focused ? '' : '-outline'}`
                : 'md-flash';
            break;
          case 'History':
            iconName =
              Platform.OS === 'ios'
                ? `ios-flash${focused ? '' : '-outline'}`
                : 'md-list'
            break;
        }

        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        )
      }
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
)