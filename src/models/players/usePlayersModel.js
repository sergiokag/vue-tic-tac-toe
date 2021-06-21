import store from '../store';
import { SET_PLAYER1, SET_PLAYER2 } from "./actions";

const usePlayersModel = ({ dispatch }) => {

    const setPlayer1 = name => {
        dispatch(SET_PLAYER1(name));
    };

    const setPlayer2 = name => {
        dispatch(SET_PLAYER2(name));
    };

    return {
        setPlayer1,
        setPlayer2,
    };
};

export default usePlayersModel(store);
