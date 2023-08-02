<template>
  <div>
    <nav class="navbar navbar-light bg-light top-menu">
      <div class="container">
        <a class="navbar-brand" href="#">Company 360</a>
        <div class="navbar-nav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Go back</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="row mt-5">
      <div class="col-10 col-md-6 mx-auto">
        <div class="card">
          <p class="card-header">Login</p>
          <div class="card-body">
            <div class="mb-3">
              <input type="email" class="form-control" placeholder="E-mail" />
            </div>
            <div class="mb-3">
              <input
                type="password"
                class="form-control"
                placeholder="Password"
              />
            </div>
            <button class="btn btn-primary">Sign in</button>
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
</style>
