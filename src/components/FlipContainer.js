import React, {Component} from 'react';

import {View, StyleSheet, Dimensions, TouchableHighlight, Text} from 'react-native';
import Word from './Word.js';
import Tooltip from './Tooltip.js';
import { connect } from 'react-redux';

import { toggleMeaningFlag } from '../redux/actions/wordActions';

var color = "white";

@connect((store) => {
    return {
        word: store.word,
        progress:store.progress,
        list:store.list,
        learnStore: store.learnStore
    };
})

export default class FlipContainer extends React.Component {
    constructor(props) {
        super(props);
        this.toggleMeaning = this.toggleMeaning.bind(this);
    }

    toggleMeaning(event) {
        this.props.dispatch(toggleMeaningFlag(this.props.word.showMeaning));
    }

    render(){
        return (
            <TouchableHighlight onPress = {this.toggleMeaning} underlayColor = "white" style = {styles.flex}>
            <View>
            <Word/>
            <Tooltip />
            </View>
            </TouchableHighlight>
            );        
    }

}

var {width} = Dimensions.get('window');


const styles = StyleSheet.create({
    flex: {
        flex:9,
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        backgroundColor: 'white'
    }
});
