<template>
        <div class="col-lg-4 col-md-6 mb-4">
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
              
              <a :href="'mysale/edit/'+ l._id"><button>Edit</button></a>
              <button @click="removeData(l._id)">remove</button>
            </div>
          </div>
        </div>
</template>

<script>

import axios from 'axios';

export default {
  props: ['l'],
  data () {

  },
  methods:{
    removeData(data) {
      axios.delete(`http://localhost:3000/api/types/remove/${data}`)
      .then((respone)=>{
        this.$router.push('/mysale');
      })
      .catch((error)=>{
        console.log(error);
      })
    }
  }
}
</script>
