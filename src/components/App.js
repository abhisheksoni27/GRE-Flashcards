import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  AsyncStorage,
  BackAndroid
} from 'react-native';

// AsyncStorage.clear();
import FlipContainer from './FlipContainer.js';
import ControlContainer from './ControlContainer.js';
import ProgressBarContainer from './ProgressBarContainer.js';

export default class App extends Component{
    render(){
        return (
            <View style= {styles.flex}>
            <StatusBar
                 hidden={true}
                 backgroundColor="#00BCD4"
                 barStyle="light-content" />
            <ProgressBarContainer />
            <FlipContainer />
            <ControlContainer />
            </View>
        );
    }
    
}


let {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    flex:{
        flex: 1,
        paddingRight: 100,
        width:width
    },
    height:{
        height: 50,
        backgroundColor: "red",
        color: "black"
    }
})