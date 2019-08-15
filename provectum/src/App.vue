<template>
  <div id="app">
     <menuheader/>
      <router-view></router-view>
  </div> 
</template>

<script>
  import menuheader from './components/menuHeader/menuheader'

export default {
  name: 'app',
   components: {
    menuheader,
   }
}

</script>

<style lang="scss">
@import './assets/styles/style.css';
@import './assets/styles/variables';
@import './assets/styles/steps.css';
@import './assets/styles/bootstrap';
</style>