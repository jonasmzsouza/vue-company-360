<template>
  <div>
    <nav class="navbar navbar-light bg-light top-menu">
      <div class="container">
        <a class="navbar-brand" href="#">Company 360</a>
        <div class="navbar-nav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/login">Access</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container mt-5">
      <div class="row">
        <div class="col">
          <div class="emphasis">
            <h4 class="text-primary text-center">
              Discover the advantages of using Company 360 to manage your business!
            </h4>
          </div>
        </div>
        <div class="col">
          <p class="text-center">Sign up and watch our demo</p>
          <div class="card">
            <div class="card-body">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Nome" />
              </div>
              <div class="mb-3">
                <input type="email" class="form-control" placeholder="E-mail" />
              </div>
              <button class="btn btn-primary">Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.top-menu {
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 5%), inset 0 -1px 0 rgb(0 0 0 / 15%);
}
.emphasis {
  padding: 60px 15px;
}
</style>
