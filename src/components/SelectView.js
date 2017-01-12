import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Navigator,
  ScrollView,
  StatusBar,
  StyleSheet,
  Dimensions,
  ToolbarAndroid,
  Image
} from 'react-native';

import ListImage from './ListImage.js';

import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = (<Icon name="rocket" size={30} color="#000" />)

export default class vocab extends Component{


  render(){

    let title = "Vocabulary";

    return (
      <View style = {{flex: 1, flexWrap: 'wrap'}}>

      <StatusBar backgroundColor = "#00BCD4" />
      
      <ToolbarAndroid
      height= {50}
      actions= {[{title:"Buy", showWithText:true, show:"always"}]}
      backgroundColor = "#00ACC1"
      titleColor = "white"
      subtitleColor = "white"
      style = {styles.toolbar}>

      <Text style = {styles.title}>{title}</Text>

      </ToolbarAndroid>

          <ListImage 
          _id="GRE" 
          navigator={this.props.navigator} 
          imageURL="http://www.vdiec.com/vdiec/assets/uploadimages/ETS-GRE-logo.jpg"/>

          <ListImage 
          _id="SAT" 
          navigator={this.props.navigator} 
          imageURL="http://www.britishielts.in/blog/wp-content/uploads/2016/03/SAT-exam-2016.png"/>
    
      </View>
    );
  }
}


const styles = StyleSheet.create({
  toolbar: {
    elevation: 5,
  },
  title: {
    fontFamily: 'regular',
    fontSize: 22,
    color: 'white',
  },
});