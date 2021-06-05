<template>
  <ol class="moves">
    <li class="move-item" v-for="(move, i) in moves" :key="i">
      <button @click="$emit('selected-move', i)">
        {{ i > 0 ? `Go to move #${i}` : `Go to game start` }}
      </button>
    </li>
  </ol>
</template>

<script>
export default {
  name: "Moves",
  emits: ["selected-move"],
  props: {
    moves: {
      required: true,
      value: Array,
    },
  },
};
</script>
