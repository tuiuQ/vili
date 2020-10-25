<template>
  <div class='home-container'>
    {{ msg }}
    <input type="submit">
    <sk-button text="button" type="info"></sk-button>
  </div>
</template>

<script lang='ts'>
  import { ref } from 'vue'
  import { useStore } from 'vuex'
  import Button from '../components/skbutton.vue'

  export default {
    setup () {
      const store = useStore()
      const msg = store.state.userName
      return { msg }
    },
    components: {
      [Button.name]: Button
    }
  }
</script>

<style scoped>
  
</style>