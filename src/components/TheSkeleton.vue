<template>
    <div class="theSkeleton_component" :style="{width: width + 'px', height: height + 'px', borderRadius: br +'px', margin: margin + 'px', background, border}">
        <div class="skeleton_content"></div>
    </div>
</template>

<script>
export default {
  name: "TheSkeleton",
  props: {
    width: {
        type: Number,
        default: 100
    },
    height: {
        type: Number,
        default: 100
    },
    br: {
        type: Number,
        default: 15
    },
    margin: {
        type: Number,
        default: 10
    },
    background: {
        type: String,
    },
    border: {
        type: String,
        default: "solid 2px #C4C4C4"
    }

  },
};
</script>

<style scoped>
    .theSkeleton_component {
        background: var(--skinRed);
    }
</style>