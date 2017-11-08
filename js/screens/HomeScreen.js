//import liraries
import React, { Component } from 'react';
import { FlatList, Dimensions, TouchableOpacity, TextInput, StatusBar, View, Image, Text, StyleSheet } from 'react-native';
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

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "red",
          marginLeft: "14%"
        }}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput} placeholder={'Average BPM'} />
        <TouchableOpacity activeOpacity={0.8}>
          <View style={styles.button}>
            <Image
              source={require('./../../assets/zap.png')}
              style={{ width: 50, height: 40 }}
              resizeMode={'contain'}
            />
            <Text style={{color: 'white', fontWeight: '500', fontSize: 18}}>CALCULATE</Text>
          </View>
        </TouchableOpacity>
        <Text style={{fontSize: 18, color: '#afafaf', fontWeight: '600', marginTop: 16, textAlign: 'center', padding: 16, width: screen.width, backgroundColor: '#f0f0f0', borderTopWidth: 1, borderBottomWidth: 1, borderTopColor: '#0e0e0e'}}>HISTORY</Text>
        <FlatList
          style={{backgroundColor: '#f0f0f0'}}
          data={[{ key: '9 Noviembre, 2017' }, { key: '9 Octubre, 2017' }]}
          renderItem={({ item }) => <View style={{marginLeft: 16, padding: 16, paddingLeft: 8, width: screen.width, marginBottom: 10, borderBottomWidth: 1, borderColor: '#a8a8a8'}}><Text style={{fontWeight: '500', color: '#0e0e0e'}}>{item.key}</Text></View>}
        />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },

  textInput: {
    marginTop: 32, 
    textAlign: 'center', 
    borderBottomColor: '#ECECEC', 
    borderBottomWidth: 1, 
    fontSize: 18
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

});

//make this component available to the app
export default HomeScreen;
