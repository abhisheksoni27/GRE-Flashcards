import React, {Component} from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

export default class ProgressBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { height} = Dimensions.get('window');
        console.log(this.props.width);
            return (
            <View style = {{width: this.props.width ? this.props.width : 0, height: 0.005*height,   
        backgroundColor: "#000" }}>
            </View>
        );
    }

}

