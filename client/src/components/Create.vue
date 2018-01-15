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
              <div class="col-md-10 offset-md-1">
              <label>
                AutoComplete
                <GmapAutocomplete @place_changed="setPlace">
                </GmapAutocomplete>
              </label>

              <gmap-map :center="center" :zoom="zoom" style="width: 100%; height: 600px">
                <gmap-marker v-if="marker" :clickable="true" :position="marker.position" :draggable="true" @drag="markerChanged"> </gmap-marker>
              </gmap-map>
              </div>
              <input type="file" id="file">
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
      center: {
        lat: -2.4931,
        lng: 118.471069
      },
      zoom: 10,
      marker: null
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
      data.append('lat',this.marker.position.lat);
      data.append('lng',this.marker.position.lng);      
      // data.append('userId','5a4e360bf044d7765a5a6cdc');
            
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
    },
    setPlace: function(place) {
      this.zoom = 12;
      this.center = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      };
      this.marker = {
        position: {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng()
        }
      };
    },
    markerChanged(xxx) {
      this.marker = {
        position: {
          lat: xxx.latLng.lat(),
          lng: xxx.latLng.lng()
        }
      };
    }
  }
}
</script>