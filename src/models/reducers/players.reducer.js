const initialState = {
    player1: null,
    player2: null,
};

export const playersReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'SET_PLAYER_NAMES': {
            const { player1, player2 } = payload;
            return {
                ...state,
                player1: player1 !== state.player1 ? player1 : state.player1,
                player2: player2 !== state.player2 ? player2 : state.player2,
            };
        }
        default:
            return state;
    }
};
