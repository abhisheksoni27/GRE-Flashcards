function addToLearnStore(index, list){
    let data = {
        type: 'ADD_TO_LEARN_STORE',
        payload: index,
        list: list
    };
    return data;
}

function removeFromLearnStore(index, list){
    console.log("LAUNCHED");
    let data = {
        type: 'REMOVE_FROM_LEARN_STORE',
        payload: index,
        list: list        
    };
    return data;
}

function mergeLearnStore(asyncLearnStore, list){
    let data = {
        type: 'MERGE_LEARN_STORE',
        payload: asyncLearnStore,
        list:list
    };
    return data;
}

export {addToLearnStore, removeFromLearnStore, mergeLearnStore};

