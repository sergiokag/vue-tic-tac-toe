<template>
  <!-- Messages -->
  <div class="message-container text-center">
    <p v-if="!winner && isFullList">Draw</p>
    <p v-else-if="!winner">
      Next player: {{ xIsNext ? player1 || "Player 1" : player2 || "Player 2" }}
    </p>
    <p v-else>Winner: {{ playerName }}</p>
  </div>

  <!-- Squares -->
  <div class="board-container">
    <Square
      v-for="(square, i) in squares"
      :key="i"
      :value="squares[i]"
      :index="i"
      @value-changed="onValueChange($event)"
    ></Square>
  </div>

  <!-- Players -->
  <div class="row">
    <label for="player1">Player1</label>
    <input type="text" id="player1" v-model.lazy="player1" />
  </div>

  <div class="row">
    <label for="player2">Player2</label>
    <input type="text" id="player2" v-model.lazy="player2" />
  </div>

  <!-- Game restart button -->
  <div class="button-container text-center">
    <button class="btn" @click="onGameRestart" :disabled="isBtnDisabled">
      Restart
    </button>
  </div>
</template>

<script>
import Square from "../components/Square";
import GameProcessor from "../utils/GameProcessor";

export default {
  name: "Board",
  components: {
    Square,
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
.board-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.button-container {
  margin: 50px 0;
}

.btn {
  font-size: 30px;
  padding: 15px;
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
