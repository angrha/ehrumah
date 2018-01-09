<template>
<div class="row">

        <sidebar></sidebar>
        <!-- /.col-lg-3 -->

  <div class="col-lg-9">
  <div class="col-lg-4 col-md-6 mb-4">
    <div class="card h-100">
      <div class="card-body">
        <h4 class="card-title">
          {{ first_name }} {{ last_name }}
        </h4>
        <h5>{{ email }}</h5>
        <p class="card-text">{{ contact }}</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
      </div>
    </div>
  </div>
  </div>
</div>
</template>

<script>

import axios from 'axios'

import Sidebar from './Sidebar'

export default {
  components: {
    Sidebar
  },
  data () {
    return {
      first_name: null,
      last_name: null,
      email : null,
      contact: null
    }
  },
  mounted(){
    axios.get(`http://localhost:3000/api/users/getuser`,{
      headers:{
        token: localStorage.getItem('authUser')
      }
    })
    .then((response)=>{
      console.log(response.data);
      
      this.first_name = response.data.data.first_name,
      this.last_name = response.data.data.last_name,
      this.email = response.data.data.email,
      this.contact = response.data.data.contact
    })
    .catch((error)=>{
      console.log(error);      
    })

  }
}
</script>

