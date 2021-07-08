import { store } from '../models/store';
import useGameModel from '../models/game';

const GameModel = useGameModel(store);

export const useGame = () => {

    const mapStateObj = {
        history: state => state.ticTacToe.history,
        winner: state => state.ticTacToe.winner,
        xIsNext: state => state.ticTacToe.xIsNext,
        stepNumber: state => state.ticTacToe.stepNumber,
        player1: state => state.players.player1,
        player2: state => state.players.player2,
    };

    const onValueChange = ({ value, index }) => {
        GameModel.onPlay({ value, index });
    };

    const onGameRestart = () => {
        GameModel.reset();
    };

    const onSelectedMove = (step) => {
        GameModel.selectHistoryStep(step);
    };

    const onUpdateValue = ({ playerId, value }) => {
        GameModel.setPlayerName({ playerId, value });
    };

    const onGameSave = () => {
        GameModel.saveGame();
    };

    return {
        mapStateObj,
        onValueChange,
        onGameRestart,
        onSelectedMove,
        onUpdateValue,
        onGameSave,
    };
};
