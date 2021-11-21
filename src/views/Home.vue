<template>
  <div class="home">
    {{selectedItemComputed}}
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',

  components: {
    
  },
  data() {
    return {
      dataObject: {}
    }
  },
  computed: {
    selectedItemComputed: function() {
      return this.$store.getters.getSelectedItem.toLowerCase()
    }
  },
}
</script>
