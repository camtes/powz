//import liraries
import React, { Component } from 'react';
import { Animated, Dimensions, TouchableOpacity, TextInput, StatusBar, View, Image, Text, StyleSheet } from 'react-native';
import Colors from './../constants/Colors'

const titlestyle = {color: 'green', fontSize: 13}
const screen = Dimensions.get('window')

// create a component
class HomeScreen extends Component {
  static navigationOptions = {
    headerTitle: <Image source={require('./../../assets/powz.png')} style={{height: 20, width: 90}} resizeMode={'contain'} />,
    titleStyle: {color: 'white'},
    headerStyle: {
      backgroundColor: Colors.tintColor,
      borderWidth: 0
    }
  }

  state = {
    z1: new Animated.Value(0),
    z2: new Animated.Value(0),
    z3: new Animated.Value(0),
    z4: new Animated.Value(0),
    z5: new Animated.Value(0)
  }

  componentDidMount() {
    Animated.timing( this.state.z1, { toValue: 100, duration: 4000 }).start()
  }
  //   Animated.timing(                  // Animate over time
  //     this.state.z1,            // The animated value to drive
  //     {
  //       toValue: 100,                   // Animate to opacity: 1 (opaque)
  //       duration: 5000,              // Make it take a while
  //     }
  //   ).start();

  //   Animated.timing(                  // Animate over time
  //     this.state.z2,            // The animated value to drive
  //     {
  //       toValue: 147,                   // Animate to opacity: 1 (opaque)
  //       duration: 5000,              // Make it take a while
  //     }
  //   ).start();

  //   Animated.timing(                  // Animate over time
  //     this.state.z3,            // The animated value to drive
  //     {
  //       toValue: 168,                   // Animate to opacity: 1 (opaque)
  //       duration: 5000,              // Make it take a while
  //     }
  //   ).start();

  //   Animated.timing(                  // Animate over time
  //     this.state.z4,            // The animated value to drive
  //     {
  //       toValue: 178,                   // Animate to opacity: 1 (opaque)
  //       duration: 5000,              // Make it take a while
  //     }
  //   ).start();

  //   Animated.timing(                  // Animate over time
  //     this.state.z5,            // The animated value to drive
  //     {
  //       toValue: 185,                   // Animate to opacity: 1 (opaque)
  //       duration: 5000,              // Make it take a while
  //     }
  //   ).start();
  // }

  render() {
    let circle = screen.width - 140

    let height = this.state.z1
    return (
      <View style={styles.container}>
        <View style={{marginTop: 32, marginBottom: 16, flexDirection: 'row', paddingBottom: 35, justifyContent: 'center', alignItems: 'flex-end', backgroundColor: 'white', width: circle, height: circle, borderRadius: circle / 2}}>
          <View style={{backgroundColor: Colors.z1, width: circle / 5 - 25, height: 50}} />
          <View style={{backgroundColor: Colors.z2, width: circle / 5 - 25, height: 75}} />
          <View style={{backgroundColor: Colors.z3, width: circle / 5 - 25, height: 100}} />
          <View style={{backgroundColor: Colors.z4, width: circle / 5 - 25, height: 125}} />
          <View style={{backgroundColor: Colors.z5, width: circle / 5 - 25, height: 150}} />
        </View>
        
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
export default HomeScreen;
