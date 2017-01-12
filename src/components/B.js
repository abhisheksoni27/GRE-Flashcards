import React, {Component} from 'react';
import {Text} from 'react-native';

export default class B extends Component{
    render(){
    return <Text style = {{fontSize:10, fontFamily: 'light'}}>{this.props.children}</Text>
    }
}