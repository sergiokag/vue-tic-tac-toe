import store from '../store';
import { PLAY, RESTART, SELECT_MOVE } from "./actions";

const useTicTacToe = ({ dispatch }) => {

    const makeMove = payload => {
        dispatch(PLAY(payload));
    };
    const resetGame = () => {
        dispatch(RESTART());
    };
    const selectMove = payload => {
        dispatch(SELECT_MOVE(payload));
    };

    return {
        makeMove, resetGame, selectMove
    };
};

export default useTicTacToe(store);