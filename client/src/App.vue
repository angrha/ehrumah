<template>
  <div id="app">
    <navigasi @navigasi-click="getAdmin" v-bind:admin="admin"></navigasi>
    <div class="container">
      <router-view @navigasi-click="getAdmin"></router-view>
    </div>
    <br />
    <footer class="py-5 bg-dark">
      <div class="container">
        <p class="m-0 text-center text-white">Copyright &copy; Your Website 2017</p>
      </div>
      <!-- /.container -->
    </footer> 
  </div>
</template>

<script>

import Navigasi from './components/Navigasi'

export default {
  name: 'app',
  components: {
    Navigasi
  },
  data () {
    return {
      admin : false
    }
  },
  methods:{
    getAdmin(value){
      if(localStorage.getItem('authUser')){
        this.admin = true;
      }else{
        this.admin = false;
      }
    }
  },
  mounted(){
    this.getAdmin()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
