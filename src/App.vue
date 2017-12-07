<template>
  <div id="app">
    <v-header></v-header>
    <v-footer></v-footer>
    <router-view/>
  </div>
</template>

<script>
    import Header from './view/header';
    import Footer from './view/footer';

    export default {
      name: 'APP',
      components: {
          'v-header': Header,
          'v-footer': Footer
      }
    };
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
