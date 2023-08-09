<template>
  <div>
    <div class="card mb-4">
      <div class="card-header">Contracts</div>
      <div class="card-body">
        <div class="row">
          <div class="col-6">
            <label class="form-label">ID Contract:</label>
            <input
              type="text"
              class="form-control"
              v-model="formSearch.id_like"
            />
          </div>
          <div class="col-6">
            <label class="form-label">Start date:</label>
            <div class="input-group">
              <input
                type="date"
                class="form-control"
                v-model="formSearch.start_date_gte"
              />
              <input
                type="date"
                class="form-control"
                v-model="formSearch.end_date_lte"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <button type="button" class="btn btn-primary" @click="search">
          Search
        </button>
      </div>
    </div>
    <div class="table-responsive">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Lead</th>
            <th scope="col">Product</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="d in data" :key="d.id">
            <td>{{ d.id }}</td>
            <td>{{ d.lead.name }}</td>
            <td>{{ d.product.name }}</td>
            <td>{{ d.start_date }}</td>
            <td>{{ d.end_date }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ApiMixin from "@/mixins/ApiMixin";

export default {
  name: "ContractsComponent",
  mixins: [ApiMixin],
  data: () => ({
    relationshipParameters: "_expand=lead&_expand=product",
    formSearch: {
      id_like: "",
      start_date_gte: "",
      end_date_lte: "",
    },
  }),
  methods: {
    search() {
      const url = `http://localhost:3000/contracts?${this.relationshipParameters}`;
      this.getApiData(url, this.formSearch);
    },
  },
  created() {
    const url = `http://localhost:3000/contracts?${this.relationshipParameters}`;
    this.getApiData(url, this.$route.query);
  },
  beforeRouteUpdate(to, from, next) {
    const url = `http://localhost:3000/contracts?${this.relationshipParameters}`;
    this.getApiData(url, to.query);
    next();
  },
};
</script>

<style></style>
