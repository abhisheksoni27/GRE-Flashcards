import React, {Component} from 'react';
import { View, Text, StyleSheet, Dimensions} from 'react-native';
import { connect } from 'react-redux';

import { changeIndex } from '../redux/actions/wordActions';

@connect((store) => {
    return {
        word: store.word
    };
})

export default class Word extends React.Component {
    render() {
        let color = this.props.word.learn ? '#00bcd4' : "black";
        if (this.props.word.showMeaning) {
            return (
                <View>
                <View style = {styles.padded}>
                <Text style={styles.meaning}>{this.props.word.meaning}</Text>
                </View>
                <View style = {styles.padded1}>
                <Text style = {styles.example}>{this.props.word.meaning.toUpperCase()}</Text>
                </View>
                </View>
                );
        } else {
            return (

                <Text style={{
                fontSize: 40,
                fontFamily: 'extralight',
                color: color,
                borderBottomWidth:0.5,
                borderBottomColor:color,
                paddingBottom: 1
                }}>{this.props.word.word}</Text>

            );
        }
    }
}

let width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    meaningHeading: {
        fontSize: 11,
        fontFamily: 'light',
        fontStyle: 'normal',
        color:'black',
        alignSelf:"flex-start",
        
    },
    meaning: {
        fontSize:30,
        fontFamily: 'thin',
        alignSelf: "center",
        color:'white'
            
        
    },
    padded: {
        flex: 1,
        width: width,
        alignItems: "center",
        justifyContent: "center",
        paddingRight:10,
        paddingLeft:10,
        backgroundColor:"#03A9F4",
        
    },
     padded1: {
        flex: 0.7,
        width: width,
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
        backgroundColor:"#000",
        
    },
    example:{
        fontFamily:'ralewayMediumItalic',
        fontSize:25,
        color:'#F06292',
        paddingRight: 10,
        paddingLeft: 10
        

    }

});