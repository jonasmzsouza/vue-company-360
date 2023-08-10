<template>
  <div class="card">
    <div class="card-header bg-primary text-white">{{ data.name }}</div>
    <div class="card-body">
      <p class="card-text">{{ data.description }}</p>
    </div>
  </div>
</template>

<script>
import ApiMixin from "@/mixins/ApiMixin";

export default {
  name: "ProductComponent",
  props: ['id'],
  mixins: [ApiMixin],
  created() {
    this.getApiData(`http://localhost:3000/products/${this.id}`);
  },
  beforeRouteUpdate(to, from, next) {
    if (to.params.id != undefined)
      this.getApiData(`http://localhost:3000/products/${to.params.id}`);
    next();
  },
  // watch: {
  //   $route(to) {
  //     //to = newValue, from = oldValue
  //     if (to.params.id != undefined)
  //       this.getApiData(`http://localhost:3000/products/${to.params.id}`);
  //   },
  // },
};
</script>

<style></style>
