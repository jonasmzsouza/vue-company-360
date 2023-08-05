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
          <tr v-for="d in data" :key="d.id">
            <td>{{ d.id }}</td>
            <td>{{ d.name }}</td>
            <td>{{ d.phone }}</td>
            <td>
              <router-link
                :to="{ name: 'lead', params: { id: d.id } }"
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
import ApiMixin from "@/mixins/ApiMixin";

export default {
  name: "LeadsComponent",
  mixins: [ApiMixin],
  created() {
    this.getApiData("http://localhost:3000/leads");
  },
};
</script>

<style></style>
