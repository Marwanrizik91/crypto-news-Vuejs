<template>
  <div
    :class="styles.class"
    :style="styles"
  >
  </div>
</template>

<script>
export default {
  name: "TheSkeleton",
  props: {
    styles: {
        type: Object,
        default: () => {
            return {
                class: "",
                width: '100px',
                height: '100px',
                borderRadius: '15px',
                margin: '10px',
                background: 'white',
                border: '2px solid #C4C4C4'
            }
        }
    },
  },
};
</script>

<style scoped></style>
