import React, {
    Component
} from 'react';
import {
    View,
    Dimensions,
    StyleSheet,
    AsyncStorage,
    Text,
    ToastAndroid,
} from 'react-native';
import ActionButton from 'react-native-action-button';
import B from './B.js';
import Icon from 'react-native-vector-icons/FontAwesome';

const rocket = (<Icon name="rocket" size={20} />);
const learn = (<Icon name="bolt" size={20} />);

import {
    toggleLearningStatus,
    changeIndex
} from '../redux/actions/wordActions';
import {
    changeProgressBarWidth
} from '../redux/actions/progressActions';
import {
    addToLearnStore,
    mergeLearnStore,
    removeFromLearnStore
} from '../redux/actions/learningFilterActions';

import {
    connect
} from 'react-redux';

var width = Dimensions.get('window').width;

@connect((store) => {
    return {
        word: store.word,
        learnStore: store.learnStore,
        list: store.list
    };
})
export default class ControlContainer extends Component {

    constructor(props) {
        super(props);
        this.nextText = this.nextText.bind(this);
        this.toggleLearningStatus = this.toggleLearningStatus.bind(this);
        this.random = 0;
        this.listIdentifier = this.props.list + "KEYLEARNSTORE";
        this.generateRandomIndexOfLearningWords = this.generateRandomIndexOfLearningWords.bind(this);

    }

    componentDidMount() {
        AsyncStorage.getItem(this.listIdentifier)
            .then((value) => {

                if (value !== null) {
                    let {dispatch, list, } = this.props;
                    let learn = JSON.parse(value)[this.props.list];
                    dispatch(changeProgressBarWidth(width, learn.length));
                    dispatch(mergeLearnStore(value, this.props.list));
                    dispatch(changeIndex(0, false, list));
                    
                }
            })
            .catch((error) => {
                throw new Error(error);
            })
    }

    updateLearnStore(learnStore, listIdentifier) {
        if (learnStore === undefined) return;
        if (learnStore[this.props.list].length === 1) {
            AsyncStorage.setItem(listIdentifier, JSON.stringify(learnStore))
                .catch((error) => {
                    throw new Error(error)
                });
        } else {
            AsyncStorage.mergeItem(listIdentifier, JSON.stringify(learnStore))
                .catch((error) => {
                    throw new Error(error)
                });
        }
    }

    generateRandomIndexOfLearningWords(maxNumber) {
        function getRandomInt(min = 0, max) {
            return Math.floor(Math.random() * (maxNumber - min + 1)) + min;
        }

        let randomInt = getRandomInt(0, maxNumber);
        return randomInt;
    }

    nextText(event) {
        var {
            dispatch,
            learnStore,
            list
        } = this.props;
        if (this.props.learnStore[list].length === 0) {
            dispatch(changeIndex(this.props.word.index, false, list));
        } else {
            if (this.random % 3 === 0) {
                let storeIndex = this.generateRandomIndexOfLearningWords(learnStore[list].length - 1);
                let index = learnStore[list][storeIndex];

                dispatch(changeIndex(index, true, list));
            } else {
                dispatch(changeIndex(this.props.word.index, false, list));
            }
        }
        this.random += 1;
    }

    toggleLearningStatus(e) {
        let {
            dispatch,
            word,
            learnStore,
            list
        } = this.props;
        dispatch(toggleLearningStatus(word.learn));
        if (!word.learn) {
            dispatch(changeProgressBarWidth(width, learnStore[list].length));
            dispatch(addToLearnStore(word.index, list));
        } else {
            dispatch(changeProgressBarWidth(width, learnStore[list].length));
            dispatch(removeFromLearnStore(word.index, list));
        }
        dispatch(changeIndex(word.index, false, list));

    }

    componentWillUnmount() {
        this.updateLearnStore(this.props.learnStore, this.listIdentifier);
    }

    getColor(){
        return this.props.word.showMeaning ? "black" : "white";
    }
    // rgba(7,177,230,1)"
    render() {
        return (
            <View style = {{ 
            flex: 1.6,
            backgroundColor:this.getColor(),
            width: width,
            justifyContent: 'space-between',
            flexDirection: 'row'}}>
            <ActionButton
                    buttonColor="#03A9F4"
                    onPress={this.nextText}
                    offsetY={10}
                    offsetX ={20} 
                    icon={rocket}/>
            <ActionButton
                    buttonColor="#E91E63"
                    onPress={this.toggleLearningStatus}
                    position="right"
                    icon={learn}
                    offsetY={10}
                    offsetX ={90} />
            <Text style = {styles.badge}>Powered by <B>Oxford Dictionary</B></Text>
            </View>);
        }
    }

    var {
        width
    } = Dimensions.get('window');


    const styles = StyleSheet.create({
        flex: {
            flex: 1.6,
            backgroundColor:"#000",
            width: width,
            justifyContent: 'space-between',
            flexDirection: 'row',
        },
        badge:{
            color:'white',
            alignSelf:'flex-end',
            paddingBottom:5,
            fontFamily:'thin',
            fontSize:7
        }
    });