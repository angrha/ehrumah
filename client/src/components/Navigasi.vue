<template>
  <div>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">Start Bootstrap</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about" v-if="admin">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login" v-if="admin == false">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/signup" v-if="admin == false">Sign Up</a>
            </li>
            <li class="nav-item">
              <a class="nav-link pointer" @click="logOut" v-if="admin">Log Out</a>
            </li>
          </ul>
        </div>
      </div>
  </nav>
  </div>
</template>

<script>


export default {
  name: 'Navigasi',
  props:['admin'],
  data () {
    return {
      admin : false
    }
  },
  methods: {
    logOut(){
      localStorage.clear();
      this.$emit('navigasi-click',false);  
      this.$router.push('/');
    }
  }
}
</script>

<style>
.pointer{
  cursor: pointer;
}
</style>
