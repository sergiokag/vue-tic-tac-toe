<template>
  <button class="btn" @click="onBtnClicked" :disabled="isBtnDisabled">
    <slot>Click</slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    isBtnDisabled: {
      value: Boolean,
    },
  },
  emits: ["btn-clicked"],
  methods: {
    onBtnClicked() {
      this.$emit("btn-clicked");
    },
  },
};
</script>

<style scoped>
.btn {
  font-size: 30px;
  padding: 15px;
}
</style>