<template>
  <div class="home">
    <hearder/>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Hearder from '@/components/hearder.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Hearder
  }
}
</script>
