import { play, restart, selectMove as selectStep, onPlay as onPlayAction, onSelectMove as onSelectStep } from "./actions";

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
    const onSelectMove = payload => {
        dispatch(onSelectStep(payload));
    };

    const onPlay = payload => {
        dispatch(onPlayAction(payload));
    };

    return {
        makeMove, resetGame, selectMove, onPlay, onSelectMove
    };
};

export default useTicTacToe;
