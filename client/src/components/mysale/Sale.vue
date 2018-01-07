<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div>
      <a href="/mysale/create">tambah</a>
    </div>
    <br />

    <div class="col-lg-12">               
      <div class="row" >
        <My v-for="l in items" :key="items" :l="l"></My>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';
import My from './View';

export default {
  name: 'Sale',
  components: {
    My
  },
  data () {
    return {
      msg: 'My Sale',
      items: []
    }
  },
  created () {
    axios.get(`http://localhost:3000/api/types/alluser`)
    .then((respone)=>{
      this.items = respone.data.data;
      console.log(this.items)
    })
    .catch((error)=>{
      console.log(error);
    })
  }
}
</script>