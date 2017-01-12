export function changeProgressBarWidth(width, learnStoreLength) {
    let data = {
        type: 'CHANGE_PROGRESS_BAR_WIDTH',
        payload: learnStoreLength + 1,
        width:width
    };
    return data;
}