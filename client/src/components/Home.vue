<template>

    <div class="row">

        <div class="col-lg-12">

          <div class="row">

            <ViewHome v-for="item in items" :key="items" :item="item"></ViewHome>            

          </div>
          <!-- /.row -->

        </div>
        <!-- /.col-lg-9 -->

    </div>

</template>

<script>

import axios from 'axios'

import ViewHome from './ViewHome'

export default {
  name: 'Home',
  components:{
    ViewHome
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
        console.log(response.data.data);
        this.items = response.data.data;
      })
      .catch((error)=>{
        console.log(error)
      })
    }
  },
  mounted () {
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
