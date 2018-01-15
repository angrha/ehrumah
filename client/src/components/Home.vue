<template>

    <div class="row">

        <div class="col-lg-12">

          <div class="row">
            <search-list @search-data="getSearching"></search-list>
            <ViewHome v-for="item in items" :key="items" :item="item"></ViewHome>            

          </div>
          <!-- /.row -->

        </div>
        <!-- /.col-lg-9 -->

    </div>

</template>

<script>

import axios from 'axios'
import SearchList from './SearchList'
import ViewHome from './ViewHome'

export default {
  name: 'Home',
  components:{
    ViewHome,
    SearchList
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      items: []
    }
  },
  methods:{
    getItems(){
      axios.get(`http://localhost:3000/api/types/all`)
      .then((response)=>{
        this.items = response.data.data;
      })
      .catch((error)=>{
        console.log(error)
      })
    },
    getSearching (value) {
      axios.get(`http://localhost:3000/api/types/search?name=${ value }`)
      .then((response)=>{
        this.items = response.data.data;
        console.log(response.data.data);
      })
      .catch((error)=>{
        console.log(error)
      })
    }
  },
  created () {
    this.getItems()
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
