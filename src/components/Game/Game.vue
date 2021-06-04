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
      <History :moves="['X']" @selected-move="onSelectedMove" />
    </div>
  </div>
</template>

<script>
// components
import Board from "../Board/Board";
import Button from "../Button/Button";
import Player from "../Player/Player";
import Status from "../Status/Status";
import History from "../History/History";

import GameProcessor from "../../utils/GameProcessor";

export default {
  name: "Game",
  components: {
    Board,
    Button,
    Player,
    Status,
    History,
  },
  mounted() {
    this.$bus.on("value-changed", (data) => this.onValueChange(data));
  },
  data() {
    return {
      squares: Array(9).fill(null),
      xIsNext: true,
      winner: null,
      player1: null,
      player2: null,
      isBtnDisabled: true,
    };
  },
  methods: {
    onValueChange(data) {
      if (data.value || this.winner) {
        return;
      }

      // Settinng new squares list
      this.squares = this.squares.map((s, i) => {
        if (data.index === i) {
          return this.xIsNext ? "X" : "O";
        }
        return s;
      });

      // Checking for winner
      const winner = GameProcessor.calculateWinner(this.squares);
      if (winner) {
        this.winner = winner;
        this.isBtnDisabled = false;
        return;
      }

      // Checking if draw
      if (!winner && this.isFullList) {
        this.isBtnDisabled = false;
        return;
      }

      // Switching player boolean flag
      this.xIsNext = !this.xIsNext;
    },
    onGameRestart() {
      this.squares = Array(9).fill(null);
      this.xIsNext = true;
      this.winner = null;
      this.player1 = null;
      this.player2 = null;
      this.isBtnDisabled = true;
    },
    onSelectedMove($event) {
      console.log("selected_move:", $event);
    },
  },
  computed: {
    isFullList() {
      return this.squares.filter((s) => !!s).length === 9;
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
        : "Draw";
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