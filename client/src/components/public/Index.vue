<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="col-lg-12">               
      <div class="row" >
        <div class="col-lg-4 col-md-6 mb-4" v-for="l in items" v-bind:key="items">
          <div class="card h-100">
            <a href="#"><img class="card-img-top" v-bind:src="l.image" alt=""></a>
            <div class="card-body">
              <h4 class="card-title">
                <a href="#">{{ l.name_item }}</a>
              </h4>
              <h5>IDR. {{ l.sale }}</h5>
              <p class="card-text">{{ l.userId.first_name }}</p>
            </div>
            <div class="card-footer">
              
              <a :href="'sale/detail/'+ l._id"><button>Detail</button></a>
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
  name: 'Home',
  data () {
    return {
      msg: 'Welcome Selamat Datang',
      items: []
    }
  },
  created () {
    axios.get(`http://localhost:3000/api/types/all`)
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
