import { SET_PLAYER1, SET_PLAYER2, RESET_PLAYERS } from "./actions";

const usePlayersModel = ({ dispatch }) => {

    const setPlayer1 = name => {
        dispatch(SET_PLAYER1(name));
    };

    const setPlayer2 = name => {
        dispatch(SET_PLAYER2(name));
    };

    const resetPlayers = () => {
        dispatch(RESET_PLAYERS());
    };

    return {
        setPlayer1,
        setPlayer2,
        resetPlayers,
    };
};

export default usePlayersModel;
