export const SET_PLAYER1 = payload => {
    return {
        type: 'SET_PLAYER1',
        payload
    }
};
SET_PLAYER1.type = 'SET_PLAYER1';

export const SET_PLAYER2 = payload => {
    return {
        type: 'SET_PLAYER2',
        payload
    }
};
SET_PLAYER2.type = 'SET_PLAYER2';

export const RESET_PLAYERS = () => {
    return {
        type: 'RESET_PLAYERS'
    }
};
RESET_PLAYERS.type = 'RESET_PLAYERS';

