//import liraries
import React, { Component } from 'react';
import { View, StatusBar, Text, Image, StyleSheet } from 'react-native';
import Colors from './../constants/Colors'
import { NavigationActions } from 'react-navigation'

const main = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'Main'})]
})

// create a component
class SplashScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  componentWillMount () {
    const { dispatch } = this.props.navigation
    
    setTimeout(() => dispatch(main), 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='dark-content' backgroundColor={Colors.tintColor} />
        <Image
          source={require('./../../assets/logo.png')}
          style={{width: 160}}
          resizeMode={'contain'}
          />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.tintColor,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

//make this component available to the app
export default SplashScreen;
