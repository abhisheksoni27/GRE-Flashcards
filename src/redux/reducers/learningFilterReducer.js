import {
    greList
} from '../../greList';
import {
    satList
} from '../../greList';

import uniq from 'lodash/uniq';

export default function reducer(state = {
    "GRE": [],
    "SAT": []
}, action) {
    switch (action.type) {
        case 'ADD_TO_LEARN_STORE':
            {
                let id = action.list;
                state[id] = uniq(state[id].concat(action.payload));
                return state;
            }

            case 'REMOVE_FROM_LEARN_STORE':
                {
                    let id = action.list;
                    console.log(id, "ID");
                    console.log(action, "ACTION");
                    // let indexOfTheWordInTheList = id==="GRE" ? greList[action.payload] : satList[action.payload];
                    // console.log(indexOfTheWordInTheList, "INDEXWORDLIST");
                    let index = state[id].indexOf(action.payload);
                    console.log(index, "INDEX");                    
                    state[id] = uniq([...state[id].slice(0, index), ...state[id].slice(index + 1)]);
                    console.log(state,"STATE");
                    return state;
                }
        case 'MERGE_LEARN_STORE':
            {
                let id = action.list;
                let parsedLearnStore = JSON.parse(action.payload);
                state[id] = uniq(state[id].concat(parsedLearnStore[id]));
                console.log(state[id]);
                return state;
            }
    }
    return state;
}