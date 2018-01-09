<template>
  <div class="hello">
    <div class="col-lg-9">               
      <div class="row" >
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="card h-100">
            <a href="#"><img class="card-img-top" v-bind:src="item.image" alt=""></a>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 mb-4">
          <div class="card h-100">
            <div class="card-body">
              <h4 class="card-title">
                <a href="#">{{ item.name_item }}</a>
              </h4>
              <address>{{ item.address }}</address>
              <address>{{ item.specific.type }}</address>
              <address>{{ item.specific.luas }}</address>
              <h5>IDR. {{ item.sale }}</h5>
              <p class="card-text">{{ item.userId.first_name }}</p>
            </div>
          </div>
        </div>      
      </div>
      <!-- /.row -->

    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'Detail',
  data () {
    return {
      msg: 'Detail',
      item: []
    }
  },
  created () {
    axios.get(`http://localhost:3000/api/types/detail/${this.$route.params.id}`)
    .then((respone)=>{
      this.item = respone.data.data;
      // console.log(this.item)
    })
    .catch((error)=>{
      console.log(error);
    })
  }
}
</script>