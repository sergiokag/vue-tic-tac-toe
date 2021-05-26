<template>
  <!-- Messages -->
  <div class="message-container">
    <p class="text-center" v-if="!winner">
      Next player: {{ xIsNext ? "X" : "O" }}
    </p>
    <p class="text-center" v-else>Winner: {{ winner }}</p>
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

  <!-- Game restart button -->
  <div class="button-container text-center">
    <button class="btn" @click="onGameRestart" :disabled="!winner">
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
        return;
      }

      // Switching player boolean flag
      this.xIsNext = !this.xIsNext;
    },
    onGameRestart() {
      this.squares = Array(9).fill(null);
      this.xIsNext = true;
      this.winner = null;
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
</style>
