import React from 'react';
import { StyleSheet, Text, View , TextInput, ScrollView, Dimensions , Keyboard, Image } from 'react-native';

import MapView from 'react-native-maps';


let styles = {
  searchView: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#3db8fe',
    alignItems:'stretch'
    
  },
  
  logoView: {
    flex: 1,
    backgroundColor: '#3db8fe',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    height: "80%"
  },


  setView: {
    flex: 2,
    backgroundColor: '#f4f9fc',
    alignItems: 'center',
  },

  inputBox: {
    backgroundColor: '#f4f9fc',
    width: "95%",
    height: "50%",
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    width: "100%",
    height: "90%"

  },

  set: {
    position: "absolute",
    right: 0,
    height: "60%",
    resizeMode: 'contain'
  },


  mapView:{
    flex: 3,
  }

};


export default class App extends React.Component{
  state = {
    start : "출발지",
    end : "도착지",
    focus: false
  }
  render(){
    return (
      <>
        <View style={styles.searchView}>
          <View style={styles.logoView}>
            <Image style={styles.logo} source={require('./assets/logoW.png')} />
          </View>
          <View style={styles.setView}>

            <View style={styles.inputBox}>
              <TextInput style={styles.input} onChangeText={text => this.setState({ start : text })} value={this.state.start} selectTextOnFocus />
              <Image style={styles.set} source={require('./assets/set.png')} />
            </View>

            <View style={styles.inputBox}>
              <TextInput style={styles.input} onChangeText={text => this.setState({ end : text })} value={this.state.end} selectTextOnFocus />
              <Image style={styles.set} source={require('./assets/set.png')} />
            </View>

          </View>
        </View>
        <MapView style={styles.mapView}/>
      </>
    );
  }
}
