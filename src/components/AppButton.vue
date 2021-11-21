<template>
    <h3 class="customButton">
      {{ buttonName }}
    </h3>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    buttonName: String,
  },
};
</script>

<style scoped>
    .customButton {
        cursor: pointer;
    }
</style>
