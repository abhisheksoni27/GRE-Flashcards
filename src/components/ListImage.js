import React, {
    Component
} from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableNativeFeedback,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';

import {setListIdentifier} from '../redux/actions/listActions.js';

@connect((store) => {
    return {
        listIdentifier: store.list
    };
})

export default class ListImage extends Component {
    constructor(props) {
        super(props);
    }

    _onPress() {
        
        let {dispatch, _id, navigator} = this.props;
        dispatch(setListIdentifier(_id));
        navigator.push({
            id: 'App'
        });
    }
    
     render() {
        let borderBottomWidth = this.props.borderBottomWidth + 1 ? this.props.borderBottomWidth : 1;
        return (
             <TouchableOpacity underlayColor= "white"
             style ={{
             borderBottomWidth: borderBottomWidth,
             flexDirection: 'column',
             flexWrap: "wrap",
             flex: 1,
             borderBottomColor: '#eee',
             elevation:1,
             backgroundColor: "white"
             }}
             activeOpacity={0.8}
             onPressIn={this._onPress.bind(this)}
             >

              <Image
              resizeMode={this.props.resizeMode ? this.props.resizeMode : "contain" }
              source={{uri: this.props.imageURL}}
              style={styles.flexItemImage} />
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    mainViewDefault: {
        flexDirection: 'column',
        flexWrap: "wrap",
        flex: 1,
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
        elevation:1,
        backgroundColor: "white"
    },
    flexItemImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    }
});