<template>
  <div
    class="theSkeleton_component"
    :style="styles"
  >
    <div class="skeleton_content"></div>
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
                width: '100px',
                height: '100px',
                borderRadius: '15px',
                margin: '10px',
                background: '#ff5c5c',
                border: '2px solid #C4C4C4'
            }
        }
    },
  },
};
</script>

<style scoped></style>
