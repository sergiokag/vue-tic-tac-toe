<template>
  <div class="site-wrapper">
    <div class="message-container text-center">
      <p v-if="!winner && isFullList">Draw</p>
      <p v-else-if="!winner">
        Next player:
        {{ xIsNext ? player1 || "Player 1" : player2 || "Player 2" }}
      </p>
      <p v-else>Winner: {{ playerName }}</p>
    </div>
    <Board :squares="squares" />
    <!-- Players -->
    <div class="row">
      <label for="player1">Player1</label>
      <input type="text" id="player1" v-model.lazy="player1" />
    </div>

    <div class="row">
      <label for="player2">Player2</label>
      <input type="text" id="player2" v-model.lazy="player2" />
    </div>

    <div class="text-center">
      <Button :isBtnDisabled="isBtnDisabled" @btn-clicked="onGameRestart">
        Restart
      </Button>
    </div>
  </div>
</template>

<script>
import Board from "../Board/Board";
import Button from "../Button/Button";
import GameProcessor from "../../utils/GameProcessor";

export default {
  name: "Game",
  components: {
    Board,
    Button,
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
  },
  computed: {
    playerName() {
      return this.winner && this.winner === "X"
        ? this.player1 || "Player 1"
        : this.winner === "O"
        ? this.player2 || "Player 2"
        : "Draw";
    },
    isFullList() {
      return this.squares.filter((s) => !!s).length === 9;
    },
  },
};
</script>

<style scoped>
.site-wrapper {
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
}

.message-container {
  font-size: 30px;
  font-weight: bold;
}

.text-center {
  text-align: center;
}

.row {
  display: flex;
  justify-content: space-evenly;
  padding: 10px 0;
  font-size: 20px;
}

.row input {
  font-size: 20px;
}
</style>