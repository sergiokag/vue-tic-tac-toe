<template>
  <ul>
    <li v-for="(move, i) in moves" :key="i">
      <button @click="$emit('selected-move', i)">Go to move #{{ i }}</button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "History",
  emits: ["selected-move"],
  props: {
    moves: {
      required: true,
      value: Array,
    },
  },
};
</script>
