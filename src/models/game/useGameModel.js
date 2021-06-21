import { useTicTacToeModel } from '../tic-tac-toe';
import { usePlayersModel } from '../players';

const useGameModel = store => {
    const { makeMove, resetGame, selectMove } = useTicTacToeModel(store);
    const { setPlayer1, setPlayer2, resetPlayers } = usePlayersModel(store);

    const makeGameMove = squareIndex => {
        makeMove(squareIndex);
    };

    const reset = () => {
        resetPlayers();
        resetGame();
    };

    const selectHistoryStep = step => {
        selectMove(step);
    };

    const setPlayerName = ({ playerId, value }) => {
        if (playerId === 'player1') {
            setPlayer1(value);
        }

        if (playerId === 'player2') {
            setPlayer2(value);
        }
    };

    return {
        makeMove: makeGameMove,
        selectHistoryStep,
        reset,
        setPlayerName,
    };
};

export default useGameModel;