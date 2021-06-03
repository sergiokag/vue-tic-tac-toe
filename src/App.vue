<template>
  <div class="site-container">
    <Game />
  </div>
</template>

<script>
import Game from "./components/Game/Game";

export default {
  name: "App",
  components: {
    Game,
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
