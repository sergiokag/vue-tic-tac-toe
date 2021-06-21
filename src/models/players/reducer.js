const initialState = {
    player1: null,
    player2: null,
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'SET_PLAYER1':
            return {
                ...state,
                player1: payload !== state.player1 ? payload : state.player1,
            };
        case 'SET_PLAYER2':
            return {
                ...state,
                player2: payload !== state.player2 ? payload : state.player2,
            };
        default:
            return state;
    }
};

export default reducer;
