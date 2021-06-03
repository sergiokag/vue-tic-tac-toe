<template>
  <div class="message-container text-center">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "Status",
  props: {
    message: {
      value: String,
    },
  },
};
</script>

<style scoped>
.message-container {
  font-size: 30px;
  font-weight: bold;
}
</style>