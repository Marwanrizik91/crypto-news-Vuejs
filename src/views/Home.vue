<template>
  <div class="home">
    {{dataObject}}
  </div>
</template>

<script>
// @ is an alias to /src
import {apiCall} from '../utils/apiCall.js'

export default {
  name: 'Home',
  components: {
    
  },
  data() {
    return {
      dataObject: {}
    }
  },
  async mounted() {
    const response = await apiCall('https://developers.coinmarketcal.com/v1/events', {qs: { max: '10', coins: 'bitcoin' },
     headers: 
   { Accept: 'application/json',
     'Accept-Encoding': 'deflate, gzip',
     'x-api-key': 'API key' }})
     this.dataObject = response
  }
}
</script>
