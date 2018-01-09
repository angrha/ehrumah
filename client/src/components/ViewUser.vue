<template>
  <div class="col-lg-4 col-md-6 mb-4">
    <div class="card h-100">
      <a href="#"><img class="card-img-top" :src="item.image" alt=""></a>
      <div class="card-body">
        <h4 class="card-title">
          <a :href="'edit/'+item._id">{{ item.name_item }}</a>
        </h4>
        <h5>{{ item.sale }}</h5>
        <p class="card-text">{{ item.address }}</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

