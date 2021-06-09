<template>
  <div class="site-wrapper grid">
    <div class="grid-item">
      <Status :message="message" />
      <Board :squares="squares" />
      <Player :id="'player1'" v-model="player1">Player1</Player>
      <Player :id="'player2'" v-model="player2">Player2</Player>
      <div class="text-center">
        <Button :isBtnDisabled="isBtnDisabled" @btn-clicked="onGameRestart">
          Restart
        </Button>
      </div>
    </div>
    <div class="grid-item">
      <Moves :moves="history" @selected-move="onSelectedMove" />
    </div>
  </div>
</template>

<script>
// components
import Board from "../Board/Board";
import Button from "../Button/Button";
import Player from "../Player/Player";
import Status from "../Status/Status";
import Moves from "../Moves/Moves";

import GameProcessor from "../../utils/GameProcessor";
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
    console.log(this.getHistory);
  },
  data() {
    return {
      stepNumber: 0,
      xIsNext: true,
      winner: null,
      player1: null,
      player2: null,
      isBtnDisabled: true,
    };
  },
  methods: {
    onValueChange({ value, index }) {
      GameFacade.play({ value, index });
    },
    onGameRestart() {
      this.history = [
        {
          squares: Array(9).fill(null),
        },
      ];
      this.xIsNext = true;
      this.stepNumber = 0;
      this.winner = null;
      this.player1 = null;
      this.player2 = null;
      this.isBtnDisabled = true;
    },
    onSelectedMove(step) {
      this.stepNumber = step;
      this.xIsNext = step % 2 === 0;
      // Checking for winner
      const winner = GameProcessor.calculateWinner(this.squares);
      if (winner) {
        this.winner = winner;
        this.isBtnDisabled = false;
        return;
      }
      this.winner = null;
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
    message() {
      if (!this.winner && this.isFullList) {
        return "Draw";
      }

      if (!this.winner) {
        return `Next player: ${
          this.xIsNext ? this.player1 || "Player 1" : this.player2 || "Player 2"
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
</script>

<style scoped>
.site-wrapper {
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
}
.grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
.text-center {
  text-align: center;
}
</style>