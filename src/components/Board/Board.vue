<template>
  <div class="box-container">
    <Square
      v-for="(square, i) in squares"
      :key="i"
      :value="squares[i]"
      :index="i"
    />
  </div>
</template>

<script>
import Square from "../Square/Square";

export default {
  name: "Board",
  components: {
    Square,
  },
  props: {
    squares: {
      value: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.box-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
