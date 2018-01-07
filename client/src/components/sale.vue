<template>
  <div>
    <div class="col-lg-9">               
      <div class="row" >
        <div class="col-lg-4 col-md-6 mb-4" v-for="l in items">
          <div class="card h-100">
            <a href="#"><img class="card-img-top" v-bind:src="l.url" alt=""></a>
            <div class="card-body">
              <h4 class="card-title">
                <a href="#">{{ l.name_item }}</a>
              </h4>
              <h5>IDR. {{ l.harga }}</h5>
              <p class="card-text">{{ l.kategoriID.kategori }}</p>
            </div>
            <div class="card-footer">
              <button v-link="{{ path: kategori }}">cart</button>
            </div>
          </div>
        </div>      
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>
