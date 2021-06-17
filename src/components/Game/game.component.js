// components
import Board from "../Board/Board";
import Button from "../Button/Button";
import Player from "../Player/Player";
import Status from "../Status/Status";
import Moves from "../Moves/Moves";

import { GameFacade } from "../../models/game/game.facade";

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
    },
    data() {
        return {
            player1: null,
            player2: null,
            isBtnDisabled: true,
        };
    },
    methods: {
        onValueChange({ value, index }) {
            GameFacade.play({ value, index });
            if (this.winner || this.message === "Draw") {
                this.isBtnDisabled = false;
            }
        },
        onGameRestart() {
            GameFacade.restart();
            this.player1 = null;
            this.player2 = null;
            this.isBtnDisabled = true;
        },
        onSelectedMove(step) {
            GameFacade.selectMove(step);
            if (this.winner) {
                this.isBtnDisabled = false;
                return;
            }
            this.isBtnDisabled = true;
        },
    },
    computed: {
        history() {
            return GameFacade.history$$();
        },
        squares() {
            return GameFacade.squares$$();
        },
        isFullList() {
            return this.squares.filter((square) => !!square).length === 9;
        },
        winner() {
            return GameFacade.winner$$();
        },
        xIsNext() {
            return GameFacade.xIsNext$$();
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
};
