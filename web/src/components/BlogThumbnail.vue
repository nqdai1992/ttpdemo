<template>
  <div>
    <div v-for="(blog, i) in blogs" class="card rounded-0 mb-3" :key="i">
      <div class="card-header mb-0">
        <router-link :to="blog.link" class="text-dark float-left"><h5>{{blog.title}}</h5></router-link>
        <span class="float-right">25-12-2017</span>
      </div>
      <div class="card-body">{{blog.content}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blogs']
}
</script>

<style>

</style>
