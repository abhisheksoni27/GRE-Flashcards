import React, {
    Component
} from 'react';
import {
    Text,
    View
} from 'react-native';

export default class B extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return ( 
        <Text style = {{fontSize:10, fontFamily: 'light', bottom:60 }}>
        Tap to flip
        </Text>);
    }
}