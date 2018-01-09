<template>
<div class="panel-body">
  <br />
  <div class="row">
    <div class="col-lg-4">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Email" v-model="email">
        </div>
        <div class="form-group">
          <input type="password" class="form-control" placeholder="Password" v-model="password">
        </div>
        <div class="form-group">
          <div class="row">
            <div class="col-sm-6 col-sm-offset-3">
              <button type="submit" class="form-control" @click="getLogin">Login</button>
            </div>
          </div>
        </div>
    </div>
  </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {
      email : null,
      password : null
    }
  },
  methods:{
    getLogin(){
      axios.post(`http://localhost:3000/api/users/signout`,{
        email: this.email,
        password: this.password
      })
      .then((response)=>{
        // console.log(response.data);
        localStorage.setItem('authUser',response.data.access_token);
        this.$emit('navigasi-click',true);
        this.$router.push('/');
      })
      .catch((error)=>{
        console.log(error);
      })
    }
  }
}
</script>
