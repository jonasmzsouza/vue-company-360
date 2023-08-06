<template>
  <div>
    <nav class="navbar navbar-light bg-light top-menu">
      <div class="container">
        <router-link class="navbar-brand" to="/home">Company 360</router-link>
        <div class="navbar-nav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="d-flex">
      <div class="list-group left-menu">
        <router-link
          class="list-group-item list-group-item-action"
          to="/home/dashboard"
          exact-active-class="active"
        >
          <i class="bi bi-speedometer2"></i> Dashboard</router-link
        >
        <router-link
          class="list-group-item list-group-item-action"
          to="/home/sales"
          exact-active-class="active"
        >
          <i class="bi bi-cart"></i> Sales</router-link
        >
        <router-link
          class="list-group-item list-group-item-action"
          :to="{ name: 'leads' }"
          exact-active-class="active"
        >
          <i class="bi bi-caret-right"></i> Leads</router-link
        >
        <router-link
          class="list-group-item list-group-item-action"
          :to="{ name: 'contracts' }"
          exact-active-class="active"
        >
          <i class="bi bi-caret-right"></i> Contracts</router-link
        >
        <router-link
          class="list-group-item list-group-item-action"
          :to="{ name: 'products' }"
          exact-active-class="active"
        >
          <i class="bi bi-box-seam"></i> Products</router-link
        >
      </div>

      <div class="w-100">
        <nav aria-label="breadcrumb" class="pt-1 ps-3">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">
              Dashboard
            </li>
          </ol>
        </nav>

        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </div>
    </div>

    <div class="footer">
      <router-view name="footer"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
.top-menu {
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 5%), inset 0 -1px 0 rgb(0 0 0 / 15%);
}

.left-menu {
  border-right: solid 1px #ccc;
  width: 250px;
}

.list-group-item {
  border-top: none;
  border-right: none;
}

/* .router-link-exact-active {
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
} */

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #ccc;
}
</style>
