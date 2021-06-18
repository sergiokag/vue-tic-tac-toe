export const PLAY = (payload) => {
    return {
        type: 'PLAY',
        payload
    }
};
PLAY.type = 'PLAY';

export const ON_PLAY = (payload) => {
    return {
        type: 'ON_PLAY',
        payload
    }
};
ON_PLAY.type = 'ON_PLAY';

export const SET_WINNER = (payload) => {
    return {
        type: 'SET_WINNER',
        payload
    }
};
SET_WINNER.type = 'SET_WINNER';

export const SELECT_MOVE = (payload) => {
    return {
        type: 'SELECT_MOVE',
        payload
    }
};
SELECT_MOVE.type = 'SELECT_MOVE';

export const RESTART = () => {
    return {
        type: 'RESTART',
        payload: null
    }
};
RESTART.type = 'RESTART';

export const SET_PLAYER_NAMES = payload => {
    return {
        type: 'SET_PLAYER_NAMES',
        payload
    }
};
SET_PLAYER_NAMES.type = 'SET_PLAYER_NAMES';

export const player1 = (payload) => {
    return {
        type: 'player1',
        payload
    }
};
player1.type = 'player1';

export const player2 = (payload) => {
    return {
        type: 'player2',
        payload
    }
};
player2.type = 'player2';