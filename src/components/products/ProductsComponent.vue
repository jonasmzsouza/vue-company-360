<template>
  <div>
    <h5>Leads</h5>
    <hr />
    <div class="row mb-2">
      <div class="col" v-for="d in data" :key="d.id">
        <div class="card m-auto" style="width: 11rem">
          <img :src="`/images/${d.image}`" :alt="d.name" class="card-img-top" />
          <div class="body text-center">
            <router-link :to="{ name: 'product', params: { id: d.id } }">
              <p class="card-text py-2">
                {{ d.name }}
              </p>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <router-view class="mt-3"></router-view>
    <router-view name="options"></router-view>
    <router-view name="indicators"></router-view>
  </div>
</template>

<script>
import ApiMixin from "@/mixins/ApiMixin";

export default {
  name: "ProductsComponent",
  mixins: [ApiMixin],
  created() {
    this.getApiData("http://localhost:3000/products");
  },
};
</script>

<style></style>
