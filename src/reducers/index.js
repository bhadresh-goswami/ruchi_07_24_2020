const reducer = (state = [], action) => {

    switch (action.type) {
        case "DISPLAY": return state;
        case "ADD": {
            state.push(action.val);
            return state;
        };
        case "CLEAR": return state = []
    }

}

export default reducer;