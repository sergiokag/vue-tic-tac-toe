<template>
  <p class="text-center">Next player: {{ xIsNext ? "X" : "O" }}</p>
  <div class="board-container">
    <Square
      v-for="(square, i) in squares"
      :key="i"
      :value="squares[i]"
      :index="i"
      @value-changed="onValueChange($event)"
    ></Square>
  </div>
</template>

<script>
import Square from "../components/Square";

export default {
  name: "Board",
  components: {
    Square,
  },
  data() {
    return {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  },
  methods: {
    onValueChange(data) {
      if (data.value) {
        return;
      }

      // Settinng new squares list
      this.squares = this.squares.map((s, i) => {
        if (data.index === i) {
          return this.xIsNext ? "X" : "O";
        }
        return s;
      });

      // Switching player boolean flag
      if (!data.value) {
        this.xIsNext = !this.xIsNext;
      }

      console.log({ data, squares: this.squares });
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

.text-center {
  text-align: center;
}
</style>
