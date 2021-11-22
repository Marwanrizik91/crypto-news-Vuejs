<template>
  <div class="home">
    <div class="information_bar"></div>
    <div class="display_home_grid">

    <Skeleton class="grid_element1" :width="style.mainBlock.width" :height="style.mainBlock.height">
        
    </Skeleton>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',

  data() {
    return {
      style: {
        mainBlock: {
          width: 'auto',
          height: 450
        }
      }
    }
  },

  components: {
    Skeleton: () => import('../components/TheSkeleton.vue')
  },
  computed: {
    selectedItemComputed: function() {
      return this.$store.getters.getSelectedItem.toLowerCase()
    }
  },
}
</script>

<style scoped>
.display_home_grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  grid-template-rows:1fr 1fr ;
}

.grid_element1 {
  grid-column-start: 2;
}
</style>