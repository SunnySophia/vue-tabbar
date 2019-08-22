<template>
  <div id="app">
    <router-view></router-view>
    <maintabbar></maintabbar>
  </div>
</template>

<script>
import maintabbar from './components/maintabbar'
export default {
  name: 'app',
  components: {
   maintabbar
  }
}
</script>

<style>
@import url('./assets/css/base.css');

</style>
