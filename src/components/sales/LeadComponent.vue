<template>
  <div>
    <h5>{{ data.id }} - {{ data.name }}</h5>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">ID</label>
      <div class="col-sm-10">
        <input
          type="text"
          readonly
          class="form-control-plaintext"
          :value="data.id"
        />
      </div>
    </div>

    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Name</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" :value="data.name" />
      </div>
    </div>

    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Phone</label>
      <div class="col-sm-10">
        <input type="text" readonly class="form-control" :value="data.phone" />
      </div>
    </div>

    <div class="col-auto">
      <button type="button" class="btn btn-primary">Update</button>
    </div>
  </div>
</template>

<script>
import ApiMixin from "@/mixins/ApiMixin";

export default {
  name: "LeadComponent",
  mixins: [ApiMixin],
  created() {
    this.getApiData(`http://localhost:3000/leads/${this.$route.params.id}`);
  },
};
</script>

<style></style>
