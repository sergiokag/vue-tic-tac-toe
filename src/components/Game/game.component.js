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
        return {
            player1: null,
            player2: null,
            isBtnDisabled: false,
            ...mapState({
                history: 'history',
                winner: 'winner',
                xIsNext: 'xIsNext',
                stepNumber: 'stepNumber',
            }),
        };
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
            // EPICS
            // GameFacade.play({ value, index });
            console.log({ value, index })
            if (this.winner || this.message === "Draw") {
                this.isBtnDisabled = false;
            }
        },
        onGameRestart() {
            store.dispatch(actions.RESTART());

            // TODO: move to state ??? 
            this.player1 = null;
            this.player2 = null;
            this.isBtnDisabled = true;
        },
        onSelectedMove(step) {
            // EPICS
            //GameFacade.selectMove(step);
            console.log(step)
            if (this.winner) {
                this.isBtnDisabled = false;
                return;
            }
            this.isBtnDisabled = true;
        },
    },
};
