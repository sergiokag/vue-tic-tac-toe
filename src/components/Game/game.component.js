// core
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
    mounted() {
        const store = injectStore();
        GameModel = useGameModel(store);
        this.$bus.on("value-changed", (data) => this.onValueChange(data));
    },
    data() {
        return mapState({
            history: state => state.ticTacToe.history,
            winner: state => state.ticTacToe.winner,
            xIsNext: state => state.ticTacToe.xIsNext,
            stepNumber: state => state.ticTacToe.stepNumber,
            player1: state => state.players.player1,
            player2: state => state.players.player2,
        })
    },
    computed: {
        squares() {
            const history = this.history.slice(0, this.stepNumber + 1);
            const current = history[history.length - 1];
            const squares = current.squares.slice();
            return squares;
        },
        isFullList() {
            return this.squares.filter((square) => !!square).length === 9;
        },
        message() {
            if (!this.winner && this.isFullList) {
                return "Draw";
            }
            if (!this.winner) {
                return `Next player: ${this.xIsNext ? this.player1 || "Player 1" : this.player2 || "Player 2"
                    }`;
            }
            return `Winner: ${this.playerName}`;
        },
        playerName() {
            return this.winner && this.winner === "X"
                ? this.player1 || "Player 1"
                : this.winner === "O"
                    ? this.player2 || "Player 2"
                    : "";
        },
        isBtnDisabled() {
            return (this.message !== 'Draw' && !this.winner) || false;
        }
    },
    methods: {
        onValueChange({ value, index }) {
            GameModel.onPlay({ value, index });
        },
        onGameRestart() {
            GameModel.reset();
        },
        onSelectedMove(step) {
            GameModel.selectHistoryStep(step);
        },
        onUpdateValue({ playerId, value }) {
            GameModel.setPlayerName({ playerId, value });
        }
    },
};
