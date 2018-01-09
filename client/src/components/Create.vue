<template>
  <div class="row">

        <sidebar></sidebar>
        <!-- /.col-lg-3 -->

        <div class="col-lg-9">

          <div class="row">
            <div class="card h-100">
              <input v-model="name_item" placeholder="Name Item">
              <input v-model="address" placeholder="Address">
              <input v-model="type" placeholder="type">
              <input v-model="luas" placeholder="Luas Tanah">
              <input v-model="sale" placeholder="Sale">
              <input type="file" id="file">
              <input v-model="location" placeholder="Location">
              <button type="button" @click="saveData">Save</button>
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
      msg: 'Tambah data',
      name_item: null,
      address: null,
      type: null,
      luas: null,
      sale: null,
      location: null 
    }
  },
  methods:{
    saveData(){

      const data = new FormData();
      data.append('image',document.getElementById('file').files[0]);
      data.append('name_item',this.name_item);
      data.append('address',this.address);
      data.append('type',this.type);
      data.append('luas',this.luas);
      data.append('sale',this.sale);
      data.append('location',this.location);
      data.append('userId','5a4e360bf044d7765a5a6cdc');
      
      
      axios.post(`http://localhost:3000/api/types/create`, data,{
        headers:{
          token: localStorage.getItem('authUser')
        }
      })
      .then((respone)=>{
        this.$router.push('/about/sale');
      })
      .catch((error)=>{
        console.log(error);
      })
    }
  }
}
</script>