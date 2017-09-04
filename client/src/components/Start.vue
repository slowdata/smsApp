<template>
  <div class="coisas">
    <input type="text" v-model="msg">
    <button @click="checkFiles()">Start</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'coisas',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    async checkFiles () {
      const response = await AuthenticationService.register({username: 'slowdata'})
      console.log(response)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
