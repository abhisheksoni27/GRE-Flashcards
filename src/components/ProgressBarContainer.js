import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Dimensions,
    AsyncStorage
} from 'react-native';
import ProgressBar from './ProgressBar.js'

import {
    connect
} from 'react-redux';


@connect((store) => {
    return {
        progress: store.progress
    };
})

export default class ProgressBarContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let progress = this.props.progress;
        return (
            <ProgressBar width = {progress}/>);       
    }
}