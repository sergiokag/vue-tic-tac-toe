<template>
  <div class="site-container">
    <Board></Board>
  </div>
</template>

<script>
import Board from "./containers/Board";

export default {
  name: "App",
  components: {
    Board,
  },
};
</script>

<style scoped>
*,
*::after,
*::before {
  box-sizing: border-box;
}

.site-container {
  margin: 0 auto;
  width: 500px;
}
</style>
