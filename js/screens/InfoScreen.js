//import liraries
import React, { Component } from 'react';
import { Dimensions, View, Text, TouchableOpacity, Image, TextInput, StyleSheet, Platform, ScrollView } from 'react-native';
import Colors from './../constants/Colors'
import { Ionicons } from '@expo/vector-icons';

const screen = Dimensions.get('window')

// create a component
class InfoScreen extends Component {
  state = {
  }

  static navigationOptions = {
    title: 'About app',
    titleStyle: {fontSize: 16, },
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: Colors.tintColor,
      borderBottomWidth: 0,
      borderColor: 'transparent'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{height: screen.height}}>
          <View>
            <View style={{height: screen.height-64, padding: 16}}>
              <Text style={[ styles.text, {marginBottom: 16}]}><Text style={styles.bold}>POWZ</Text> is an application to calculate your <Text style={styles.bold}>cycling training zones</Text>.</Text>
              <Text style={[ styles.text, {marginBottom: 16}]}>To perform the test is necessary search a continuous climb. It's very important that the weather will be good.</Text>
              <Text style={styles.title}>STEPS</Text>
              <View style={{margin: 8}}>
                <Text style={styles.text}>1. 10 minutes for warm-up</Text>
                <Text style={styles.text}>2. 20 minutes for do the test.</Text>
                <Text style={styles.text}>3. 30 minutes for warm-dow</Text>
              </View>
              <Text style={[ styles.text, {marginBottom: 16}]}>For obtaining your zones, you only need introduce your test average bpm into the previous screen.</Text>
              <Text style={[ styles.text]} >Developed by <Text style={styles.bold}>ccamposfuentes.es</Text></Text>
              <Text style={[ styles.text]}>Design by <Text style={styles.bold}>danijimenez.es</Text></Text>  
            </View>
          </View>
        </ScrollView>
        
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  title: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500'
  },

  text: {
    fontSize: 16,
    color: Colors.textColor,
    lineHeight: 21
  },

  bold: {
    fontWeight: '600'
  }
});

//make this component available to the app
export default InfoScreen;
