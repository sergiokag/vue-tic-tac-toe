export const PLAY = (payload) => {
    return {
        type: 'PLAY',
        payload
    }
};
PLAY.type = 'PLAY';

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
