<template>
  <div class="home">
    <div class="information_bar"></div>
    <div class="display_home_grid">
      <div class="card_container">
        
      <Skeleton
        :class="styles.cardContainer.class"
        :style="styles.cardContainer"
      >
      
        <Skeleton  :style="styles.imgHolder" :class="styles.imgHolder.class"/>
        <Skeleton  :style="styles.textHolder" :class="styles.textHolder.class"/>
        <Skeleton  :style="styles.textHolderSmall" :class="styles.textHolderSmall.class"/>
        <Skeleton  :style="styles.textHolderxSmall" :class="styles.textHolderxSmall.class"/>
      </Skeleton>
      </div>
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
        cardContainer: {
          class: "card_wrapper",
          width: "auto",
          height: '450px',
        },
        imgHolder: {
          class: 'img_holder',
          background: '#c4c4c4',
          width: '350px',
          height: '250px',
        },
        textHolder: {
          class: 'text_holder',
          background: '#c4c4c4',
          width: '370px',
          height: '40px'
        },
        textHolderSmall: {
          class: 'text_holder_small',
          background: '#c4c4c4',
          width: '320px',
          height: '30px'
        },
        textHolderxSmall: {
          class: 'text_holder_xsmall',
          background: '#c4c4c4',
          width: '280px',
          height: '20px'
        }
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
  position: relative;
  box-sizing: border-box;
}

.card_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

 

</style>
