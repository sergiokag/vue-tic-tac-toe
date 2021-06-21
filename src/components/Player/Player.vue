<template>
  <div class="row">
    <label :for="id">
      <slot>Player</slot>
    </label>
    <input
      type="text"
      :id="id"
      :value="inputValue"
      @input="onUpdateInputValue"
    />
  </div>
</template>

<script>
export default {
  name: "Player",
  emits: ["updateValue"],
  props: {
    inputValue: String,
    id: {
      value: String,
    },
  },
  methods: {
    onUpdateInputValue($event) {
      this.$emit("updateValue", {
        playerId: this.id,
        value: $event.target.value,
      });
    },
  },
};
</script>

<style scoped>
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