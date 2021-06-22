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
