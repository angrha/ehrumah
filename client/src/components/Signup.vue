<template>
<div class="panel-body">
  <br />
  <div class="row">
    <div class="col-lg-4">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="First Name" v-model="first_name">
        </div>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="last Name" v-model="last_name">
        </div>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Contact" v-model="contact">
        </div>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Email" v-model="email">
        </div>
        <div class="form-group">
          <input type="password" class="form-control" placeholder="Password" v-model="password">
        </div>
        <div class="form-group">
          <div class="row">
            <div class="col-sm-6 col-sm-offset-3">
              <button type="submit" class="form-control" @click="getSignup">Sign Up</button>
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
  name: 'SignUp',
  data () {
    return {
      first_name: null,
      last_name: null,
      email : null,
      contact: null,
      password: null
    }
  },
  methods:{
    getSignup(){
      axios.post(`http://localhost:3000/api/users/signin`,{
        first_name: this.first_name,
        last_name: this.last_name,
        contact: this.contact,
        email: this.email,
        password: this.password,
        role: 'User'
      })
      .then((response)=>{
        this.$router.push('/');
      })
      .catch((error)=>{
        console.log(error);
      })
    }
  }
}
</script>
