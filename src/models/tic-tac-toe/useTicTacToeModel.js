import { PLAY, RESTART, SELECT_MOVE, ON_PLAY } from "./actions";

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

    const onPlay = payload => {
        dispatch(ON_PLAY(payload));
    };

    return {
        makeMove, resetGame, selectMove, onPlay
    };
};

export default useTicTacToe;
