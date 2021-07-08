// core
import { onMounted, getCurrentInstance, toRefs, computed } from 'vue';
import { mapState } from 'redux-vuex';

// components
import Board from "../Board/Board";
import Button from "../Button/Button";
import Player from "../Player/Player";
import Status from "../Status/Status";
import Moves from "../Moves/Moves";

import { injectStore } from 'redux-vuex';

import useGameModel from "../../models/game";

let GameModel;

export default {
    name: "Game",
    components: {
        Board,
        Button,
        Player,
        Status,
        Moves,
    },
    setup() {
        onMounted(() => {
            const store = injectStore();
            GameModel = useGameModel(store);

            const compInstance = getCurrentInstance();
            const { $bus } = compInstance.appContext.config.globalProperties;
            $bus.on("value-changed", (data) => onValueChange(data));
        });

        const stateObj = mapState({
            history: state => state.ticTacToe.history,
            winner: state => state.ticTacToe.winner,
            xIsNext: state => state.ticTacToe.xIsNext,
            stepNumber: state => state.ticTacToe.stepNumber,
            player1: state => state.players.player1,
            player2: state => state.players.player2,
        });

        // methods
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

        // computed
        const squares = computed(() => {
            const history = stateObj.history.slice(0, stateObj.stepNumber + 1);
            const current = history[history.length - 1];
            const squares = current.squares.slice();
            return squares;
        });

        const isFullList = computed(() => {
            return squares.value.filter((square) => !!square).length === 9;
        });

        const message = computed(() => {
            if (!stateObj.winner && isFullList.value) {
                return "Draw";
            }
            if (!stateObj.winner) {
                return `Next player: ${stateObj.xIsNext ? stateObj.player1 || "Player 1" : stateObj.player2 || "Player 2"
                    }`;
            }
            return `Winner: ${playerName.value}`;
        });

        const playerName = computed(() => {
            return stateObj.winner && stateObj.winner === "X"
                ? stateObj.player1 || "Player 1"
                : stateObj.winner === "O"
                    ? stateObj.player2 || "Player 2"
                    : "";
        });

        const isBtnDisabled = computed(() => {
            return (message.value !== 'Draw' && !stateObj.winner) || false;
        });

        return {
            ...toRefs(stateObj),
            squares,
            message,
            playerName,
            isBtnDisabled,
            onValueChange,
            onGameSave,
            onUpdateValue,
            onSelectedMove,
            onGameRestart,
        };
    }
};
