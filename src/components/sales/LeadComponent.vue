<template>
  <div>
    <h5>{{ lead?.id}} - {{ lead?.name }}</h5>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">ID</label>
      <div class="col-sm-10">
        <input
          type="text"
          readonly
          class="form-control-plaintext"
          :value="lead?.id"
        />
      </div>
    </div>

    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Name</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" :value="lead?.name" />
      </div>
    </div>

    <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Phone</label>
      <div class="col-sm-10">
        <input type="text" readonly class="form-control" :value="lead?.phone" />
      </div>
    </div>

    <div class="col-auto">
      <button type="button" class="btn btn-primary">Update</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeadComponent",
  data: () => ({
    lead: null,
  }),
  methods: {
    getApiData() {
      fetch(`http://localhost:3000/leads/${this.$route.params.id}`)
        .then((response) => response.json())
        .then((response) => {
          this.lead = response;
          console.log(this.lead)
        });
    },
  },
  created() {
    this.getApiData();
  },
};
</script>

<style></style>
