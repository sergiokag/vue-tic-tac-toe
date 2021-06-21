import { useTicTacToeModel } from 'models/tic-tac-toe';
import { usePlayersModel } from 'models/players';

const useGameModel = () => {
    const { makeMove, resetGame, selectMove } = useTicTacToeModel();
    const { setPlayer1, setPlayer2 } = usePlayersModel();

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

export default useGameModel();