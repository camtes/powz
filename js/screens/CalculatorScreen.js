//import liraries
import React, { Component } from 'react';
import { Dimensions, View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';
import Colors from './../constants/Colors'

const screen = Dimensions.get('window')

// create a component
class CalculatorScreen extends Component {
  state = {
    opacity: 0
  }

  static navigationOptions = {
    headerTitle: <Image source={require('./../../assets/powz.png')} style={{height: 20, width: 90}} resizeMode={'contain'} />,
    title: 'Calculator',
    titleStyle: {color: 'white'},
    headerStyle: {
      backgroundColor: Colors.tintColor,
      borderWidth: 0
    }
  }

  calculateZones() {
    if (this.state.value) {
      this.setState({opacity: 1})
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <TextInput style={styles.textInput} onChangeText={(value) => this.setState({value})} placeholder={'Average BPM'} />
        <TouchableOpacity onPress={() => this.calculateZones()} activeOpacity={0.8}>
          <View style={styles.button}>
            <Image
              source={require('./../../assets/zap.png')}
              style={{ width: 50, height: 40 }}
              resizeMode={'contain'}
            />
            <Text style={{ color: 'white', fontWeight: '500', fontSize: 18 }}>CALCULATE</Text>
          </View>
        </TouchableOpacity>

        <View style={{opacity: this.state.opacity, alignItems: 'center', marginTop: 32}} >
          <Text style={styles.title}>ZONES</Text>

          <View style={styles.zones}>
            <Text style={styles.zonesBold}>Z1</Text>
              <Text style={styles.zonesValue}>100 <Text style={styles.zonesDesc}>bpm</Text>
            </Text>
          </View>
          
          <View style={styles.zones}>
            <Text style={styles.zonesBold}>Z2</Text>
              <Text style={styles.zonesValue}>147 <Text style={styles.zonesDesc}>bpm</Text>
            </Text>
          </View>
          
          <View style={styles.zones}>
            <Text style={styles.zonesBold}>Z3</Text>
              <Text style={styles.zonesValue}>168 <Text style={styles.zonesDesc}>bpm</Text>
            </Text>
          </View>
          
          <View style={styles.zones}>
            <Text style={styles.zonesBold}>Z4</Text>
              <Text style={styles.zonesValue}>174 <Text style={styles.zonesDesc}>bpm</Text>
            </Text>
          </View>
          
          <View style={styles.zones}>
            <Text style={styles.zonesBold}>Z5</Text>
              <Text style={styles.zonesValue}>187 <Text style={styles.zonesDesc}>bpm</Text>
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
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

  textInput: {
    marginTop: 32,
    textAlign: 'center',
    borderBottomColor: '#ECECEC',
    borderBottomWidth: 1,
    fontSize: 25,
    width: 200
  },

  button: {
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingRight: 16,
    paddingLeft: 8,
    height: 60,
    backgroundColor: Colors.tintColor,
    borderRadius: 10
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

  zonesDesc: {
    fontSize: 15,
    color: '#888888'
  }
});

//make this component available to the app
export default CalculatorScreen;
