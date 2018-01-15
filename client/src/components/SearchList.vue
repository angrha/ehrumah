<template>
  <div class="col-md-12">
    <div class="card my-4">
      <div class="card-body">
        <div class="input-group">
          <input type="text" v-model="searching" class="form-control" placeholder="searching" @keyup.enter="submitSearching">
        </div>    
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      searching: ''
    }
  },
  methods: {
    submitSearching () {
      this.$emit('search-data', this.searching)
    }
  }
}
</script>
