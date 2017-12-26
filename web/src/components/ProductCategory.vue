<template>
  <div class="card px-0 rounded-0 mb-3">
    <div class="card-heading">
      <h6 class="text-white card-heading-title">{{title}}</h6>
    </div>
    <div class="card-body row mx-0 p-0">
      <div v-for="(prod, i) in products"
        :key="prod.name + i" 
        class="prod-wrapper col-lg-3 col-sm-4 col-sx-6 card border-top-0 border-left-0 px-4 rounded-0 py-3"
        :class="{'border-right-0': (i + 1) % 4 === 0}"
        style="position: relative;"
      >
        <figure class="figure" style="position: relative">
          <img class="card-img-top" height="140px" :src="prod.image" alt="Card image cap">
          <div class="img-hover">
            <button type="button" @click="$router.push('/product/info')" class="btn btn-dark rounded-0" style="cursor: pointer">Chi tiết</button>
          </div>
          <figcaption class="font-weight-bold pt-3 pb-1">{{prod.name}}</figcaption>
        </figure>
        <div style="position: absolute; bottom: 6px; right: 1.5rem; font-size: 20px"  class="text-success">$ {{prod.price || 100}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'products']
}
</script>

<style scoped>
  .card-heading {
    border-top: 1px solid #547196;
    background-image: linear-gradient(to bottom,#384c65 0,#263344 100%);
  }
  .figure:hover .img-hover {
    display: flex;
  }
  .img-hover {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    height: 140px;
    left: 0;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
  }
</style>
