<template>
  <q-layout view="lHh Lpr lFf">
    <navbar/>
    <router-view></router-view>
  </q-layout>
</template>

<script>
import navbar from './components/NavBar.vue'

export default {
  name: 'LayoutDefault',

  components: {
    navbar
  },

  setup () {
    return {
    }
  }
}
</script>

<style>
.q-toolbar__title{
  text-align: center;
}
</style>
