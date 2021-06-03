<template>
  <div
    tabindex="0"
    class="box"
    @click="onSettingValue(value, index)"
    @keyup.enter="onSettingValue(value, index)"
  >
    {{ value }}
  </div>
</template>

<script>
export default {
  name: "Square",
  emits: ["value-changed"],
  props: {
    value: {
      type: String,
    },
    index: {
      type: Number,
    },
  },
  methods: {
    onSettingValue(value, index) {
      this.$bus.emit("value-changed", { value, index });
    },
  },
};
</script>

<style scoped>
.box {
  border: 2px solid black;
  width: 100px;
  height: 100px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  flex: 0 0 30%;
}

.box:focus {
  /* border: 1px solid #ffcc00; */
  box-shadow: inset 0 0 15px #244d99;
  outline: none;
}
</style>