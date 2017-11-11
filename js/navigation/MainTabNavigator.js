import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from './../constants/Colors'

import HomeScreen from './../screens/HomeScreen'
import CalculatorScreen from './../screens/CalculatorScreen'
import HistoryScreen from './../screens/HistoryScreen'

export default TabNavigator(
  {
    Home: { screen: HomeScreen },
    Calculator: { screen: CalculatorScreen },
    History: { screen: HistoryScreen }
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
              : iconName = null
            break;
          case 'Calculator':
            Platform.OS === 'ios'
              ? iconName = `ios-calculator${focused ? '' : '-outline'}`
              : iconName = null
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
    tabBarComponent: TabBarBottom,
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: 'gray',
      inactiveTintColor: 'gray',
    }
  }
)