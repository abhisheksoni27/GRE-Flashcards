import {
    greWords
} from '../../greList.js';
import {
    satWords
} from '../../satList.js';

function getRandomInt(min = 0, max = 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeIndex(currentIndex, learningFlag = false, list, ) {
    var payload;
    if (learningFlag) {
        payload = currentIndex ? currentIndex : 0;
    } else {
        payload = list === "GRE" ? getRandomInt(0, greWords) : getRandomInt(0, satWords);
    }
    let data = {
        type: 'CHANGE_INDEX',
        payload: payload,
        learningFlag: learningFlag
    };

    return data;
}

function toggleLearningStatus(currentState) {
    let data = {
        type: 'TOGGLE_LEARNING_STATUS',
        payload: !currentState
    };

    return data;
}

function toggleMeaningFlag(currentFlag) {
    let data = {
        type: 'TOGGLE_MEANING_FLAG',
        payload: !currentFlag
    };
    return data;
}

export {
    changeIndex,
    toggleLearningStatus,
    toggleMeaningFlag
};