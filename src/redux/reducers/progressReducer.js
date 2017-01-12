function calculateWidth(width, learnStoreLength) {
    console.log((learnStoreLength / 300) * width);
    return (learnStoreLength / 300) * width;
}

export default function reducer(state = 0, action) {
    if (action.type === "CHANGE_PROGRESS_BAR_WIDTH") {
        state = calculateWidth(action.width, action.payload);
    }
    return state;
}