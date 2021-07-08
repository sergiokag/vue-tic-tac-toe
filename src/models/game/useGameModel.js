import { useTicTacToeModel } from '../tic-tac-toe';
import { usePlayersModel } from '../players';
import { saveState } from '../../utils/persistState';

const useGameModel = store => {
    const { makeMove, resetGame, onSelectMove, onPlay } = useTicTacToeModel(store);
    const { setPlayer1, setPlayer2, resetPlayers } = usePlayersModel(store);

    const makeGameMove = squareIndex => {
        makeMove(squareIndex);
    };

    const reset = () => {
        resetPlayers();
        resetGame();
    };

    const selectHistoryStep = step => {
        onSelectMove(step);
    };

    const setPlayerName = ({ playerId, value }) => {
        if (playerId === 'player1') {
            setPlayer1(value);
        }

        if (playerId === 'player2') {
            setPlayer2(value);
        }
    };

    const saveGame = () => {
        saveState(store.getState());
    };

    return {
        makeMove: makeGameMove,
        selectHistoryStep,
        reset,
        setPlayerName,
        onPlay,
        saveGame,
    };
};

export default useGameModel;
