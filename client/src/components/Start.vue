<template>
  <div class="coisas">
    <input type="text" v-model="msg">
    <button @click="checkFiles()">Start</button>
    <br>
    <p>Total de Erros: {{errors.length}}</p>
    <ul>
      <li v-for="error in errors">{{error}}</li>
    </ul>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'coisas',
  data () {
    return {
      msg: '',
      errors: []
    }
  },
  methods: {
    async checkFiles () {
      const response = await AuthenticationService.start({username: 'slowdata'})
      this.errors = response.data.errors
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
