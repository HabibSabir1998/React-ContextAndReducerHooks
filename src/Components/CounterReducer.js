const counterReducer = (state, action) => {
    
    switch(action) {
        case 'INCREASE':
            return state + 1
        default:
           return state
    };
};

export default counterReducer;