<template>
  <div class="home">
    <div class="information_bar"></div>
    <div class="display_home_grid">
      <Skeleton
        class="card_container"
        :style="styles"
      >
        <Skeleton></Skeleton>
      </Skeleton>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",

  data() {
    return {
      styles: {
        
          width: "auto",
          height: '450px',
        
      },
    };
  },

  components: {
    Skeleton: () => import("../components/TheSkeleton.vue"),
  },
  computed: {
    selectedItemComputed: function () {
      return this.$store.getters.getSelectedItem.toLowerCase();
    },
  },
};
</script>

<style scoped>
.display_home_grid {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 1fr;
}

.card_container {
  grid-column-start: 2;
}
</style>
