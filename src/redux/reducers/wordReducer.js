import {
    greList
} from '../../greList';

import {
    satList
} from '../../greList';

function findInWordList(index) {
    return greList[index];
}

export default function reducer(state = {
    index: 0,
    word: "",
    meaning: "",
    learn: false,
    showMeaning: false
}, action) {
    switch (action.type) {
        case 'CHANGE_INDEX':
            {
                let newWord = findInWordList(action.payload);
                return Object.assign({}, state, {
                    index: action.payload,
                    word: newWord.word,
                    meaning: newWord.meaning,
                    showMeaning:false,
                    learn: action.learningFlag
                });
            }
        case 'TOGGLE_LEARNING_STATUS':
            {
                return Object.assign({}, state, {
                    learn: action.payload
                });
            }
        case 'TOGGLE_MEANING_FLAG':
            {
                return Object.assign({}, state, {
                    showMeaning: action.payload
                });
            }
    }
    return state;
}