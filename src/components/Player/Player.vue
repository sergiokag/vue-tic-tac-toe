<template>
  <div class="row">
    <label :for="id">
      <slot>Player</slot>
    </label>
    <input
      type="text"
      :id="id"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "Player",
  props: {
    modelValue: String,
    id: {
      value: String,
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