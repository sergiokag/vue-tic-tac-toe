import { play, restart, selectMove as selectStep, onPlay as onPlayAction } from "./actions";

const useTicTacToe = ({ dispatch }) => {

    const makeMove = payload => {
        dispatch(play(payload));
    };
    const resetGame = () => {
        dispatch(restart());
    };
    const selectMove = payload => {
        dispatch(selectStep(payload));
    };

    const onPlay = payload => {
        dispatch(onPlayAction(payload));
    };

    return {
        makeMove, resetGame, selectMove, onPlay
    };
};

export default useTicTacToe;
