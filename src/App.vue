<template>
  <div>
    <h1>hOLA</h1>
    <MenuComponent/>
    <MenuAleatorio/>

    <router-view></router-view>
  </div>
</template>

<script>
import MenuComponent from './components/MenuComponent.vue'
import MenuAleatorio from './components/MenuAleatorio.vue'

export default {
  name: 'App',
  components: {
    MenuComponent, MenuAleatorio
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
