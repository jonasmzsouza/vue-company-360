<template>
  <div>
    <h5>Leads</h5>
    <div class="table-responsive">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="lead in leads" :key="lead.id">
            <td>{{ lead.id }}</td>
            <td>{{ lead.name }}</td>
            <td>{{ lead.phone }}</td>
            <td>
              <router-link
                :to="`/home/sales/leads/${lead.id}`"
                class="btn btn-sm btn-primary"
              >
                <i class="bi bi-pencil-square" style="cursor: pointer"></i>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeadsComponent",
  data: () => ({
    leads: null,
  }),
  methods: {
    getApiData() {
      fetch("http://localhost:3000/leads")
        .then((response) => response.json())
        .then((response) => {
          this.leads = response;
        });
    },
  },
  created() {
    this.getApiData();
  },
};
</script>

<style></style>
