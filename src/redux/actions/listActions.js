export function setListIdentifier(listIdentifier){
    let data = {
        type: 'SET_LIST_IDENTIFIER',
        payload: listIdentifier
    };
    return data;
}