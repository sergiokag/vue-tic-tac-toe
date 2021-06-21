const initialState = {
    player1: null,
    player2: null,
};

export const playersReducer = (state = initialState, { type, payload }) => {
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
        case 'RESET_PLAYERS':
            return {
                ...initialState
            };
        default:
            return state;
    }
};
