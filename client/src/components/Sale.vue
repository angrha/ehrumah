<template>

    <div class="row">

        <sidebar></sidebar>
        <!-- /.col-lg-3 -->

        <div class="col-lg-9">

          <div class="row">

            <ViewUser v-for="item in items" :key="items" :item="item"></ViewUser>
            
          </div>
          <!-- /.row -->

        </div>
        <!-- /.col-lg-9 -->

    </div>

</template>

<script>

import axios from 'axios'

import Sidebar from './Sidebar'

import ViewUser from './ViewUser'

export default {
  name: 'Sale',
  components:{
    Sidebar,
    ViewUser
  },
  data () {
    return {
      msg: 'First Route Child',
      items: []
    }
  },
  methods:{
    getData(){
      axios.get(`http://localhost:3000/api/types/alluser`,{
        headers:{
          token: localStorage.getItem('authUser')
        }
      })
      .then((respone)=>{
        console.log(respone);
        this.items = respone.data.data
      })
      .catch((error)=>{
        console.log(error);
      })
    }
  },
  mounted () {
    this.getData();
  }
}
</script>