//import liraries
import React, { Component } from 'react';
import { AsyncStorage, ScrollView, Animated, Dimensions, TouchableOpacity, TextInput, StatusBar, View, Image, Text, StyleSheet, Button } from 'react-native';
import Colors from './../constants/Colors'
import { Ionicons } from '@expo/vector-icons';

const titlestyle = { color: 'green', fontSize: 13 }
const screen = Dimensions.get('window')
let circle = screen.width - 160

// create a component
class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation

    return {
      headerTitle: <Image source={require('./../../assets/powz.png')} style={{ height: 20, width: 90 }} resizeMode={'contain'} />,
      titleStyle: { color: 'white' },
      headerRight: (
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigate('InfoScreen')}>
          <Ionicons
            name={'ios-information-circle'}
            size={32}
            style={{ marginRight: 8 }}
            color={'rgba(255,255,255,0.7)'}
          />
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: Colors.tintColor,
        borderWidth: 0
      }
    }
  }

  componentDidMount () {
    AsyncStorage.getItem('bpm').then((value) => {
      value ? this.calculateZones(value) : null
    })
  }

  state = {
    value: 'bpm',
    z1: 0,
    z2: 0,
    z3: 0,
    z4: 0,
    z5: 0
  }

  calculateZones(bpm) {
    let umbral = parseInt(parseInt(bpm) * 0.98)

    this.setState({
      value: bpm,
      z1: parseInt(umbral * 0.68),
      z2: parseInt(umbral * 0.83),
      z3: parseInt(umbral * 0.94),
      z4: parseInt(umbral * 1.05),
      z5: parseInt(umbral * 1.05)
    })

    AsyncStorage.setItem('value', bpm.toString())
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{ alignItems: 'center' }}>
            <View style={{ marginTop: 32, marginBottom: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', width: circle, height: circle, borderRadius: circle / 2 }}>
              <View style={{ position: 'absolute', left: 10, bottom: 35, right: 10, height: circle, justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'row', opacity: 0.1 }}>
                <View style={{ backgroundColor: Colors.z1, width: circle / 5 - 20, height: 50 }} />
                <View style={{ backgroundColor: Colors.z2, width: circle / 5 - 20, height: 75 }} />
                <View style={{ backgroundColor: Colors.z3, width: circle / 5 - 20, height: 100 }} />
                <View style={{ backgroundColor: Colors.z4, width: circle / 5 - 20, height: 125 }} />
                <View style={{ backgroundColor: Colors.z5, width: circle / 5 - 20, height: 140 }} />
              </View>
              <TextInput
                keyboardType={'numeric'}
                placeholderTextColor={'rgba(0,0,0,0.8)'}
                underlineColorAndroid={'transparent'}
                style={[styles.textinput, { fontWeight: this.state.value ? '300' : '600' }]}
                onChangeText={(value) => this.calculateZones(value)}
                placeholder={'BPM'} />
            </View>

            <Text style={styles.title}>CURRENT ZONES</Text>

            <View style={styles.zones}>
              <Text style={styles.zonesBold}>Z1</Text>
              <Text style={styles.zonesValue}><Text style={styles.zonesValueLess}> 0 - </Text>{this.state.z1} <Text style={styles.zonesDesc}>bpm</Text>
              </Text>
            </View>

            <View style={styles.zones}>
              <Text style={styles.zonesBold}>Z2</Text>
              <Text style={styles.zonesValue}><Text style={styles.zonesValueLess}> {this.state.z1} - </Text>{this.state.z2} <Text style={styles.zonesDesc}>bpm</Text>
              </Text>
            </View>

            <View style={styles.zones}>
              <Text style={styles.zonesBold}>Z3</Text>
              <Text style={styles.zonesValue}><Text style={styles.zonesValueLess}> {this.state.z2} - </Text>{this.state.z3} <Text style={styles.zonesDesc}>bpm</Text>
              </Text>
            </View>

            <View style={styles.zones}>
              <Text style={styles.zonesBold}>Z4</Text>
              <Text style={styles.zonesValue}><Text style={styles.zonesValueLess}> {this.state.z3} - </Text>{this.state.z4} <Text style={styles.zonesDesc}>bpm</Text>
              </Text>
            </View>

            <View style={styles.zones}>
              <Text style={styles.zonesBold}>Z5</Text>
              <Text style={styles.zonesValue}><Text style={styles.zonesValueLess}>+</Text>{this.state.z5} <Text style={styles.zonesDesc}>bpm</Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  textinput: {
    fontWeight: '100',
    fontSize: 80,
    opacity: 0.8,
    width: circle,
    textAlign: 'center',
    height: circle
  },

  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.background,
  },

  title: {
    margin: 16,
    fontSize: 21,
    fontWeight: '300',
    color: '#bbb'
  },

  zones: {
    flexDirection: 'row',
    padding: 8,
    paddingLeft: 32,
    paddingRight: 32,
    width: screen.width,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center'
  },

  zonesBold: {
    fontWeight: '600',
    color: '#555555'
  },

  zonesValue: {
    fontSize: 18
  },

  zonesValueLess: {
    color: 'rgba(0,0,0,0.3)'
  },

  zonesDesc: {
    fontSize: 15,
    color: '#888888'
  }

});

//make this component available to the app
export default HomeScreen;
