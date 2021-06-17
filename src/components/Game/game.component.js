// components
import Board from "../Board/Board";
import Button from "../Button/Button";
import Player from "../Player/Player";
import Status from "../Status/Status";
import Moves from "../Moves/Moves";

import { injectStore, injectActions, mapState } from 'redux-vuex';

let store = null;
let actions = null;

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
        this.$bus.on("value-changed", (data) => this.onValueChange(data));
        store = injectStore();
        actions = injectActions();
    },
    data() {
        return mapState({
            history: state => state.history,
            winner: state => state.winner,
            xIsNext: state => state.xIsNext,
            stepNumber: state => state.stepNumber,
            player1: state => state.player1,
            player2: state => state.player2,
            isBtnDisabled: state => state.isBtnDisabled,
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
    },
    methods: {
        onValueChange({ value, index }) {
            store.dispatch(actions.PLAY({ value, index }));
            if (this.winner || this.message === "Draw") {
                this.isBtnDisabled = false;
            }
        },
        onGameRestart() {
            store.dispatch(actions.RESTART());
            this.player1 = null;
            this.player2 = null;
            this.isBtnDisabled = true;
        },
        onSelectedMove(step) {
            store.dispatch(actions.SELECT_MOVE(step));
            if (this.winner) {
                this.isBtnDisabled = false;
                return;
            }
            this.isBtnDisabled = true;
        },
    },
};
