<template>
  <div>
    <nav class="navbar navbar-light bg-light top-menu">
      <div class="container">
        <a class="navbar-brand" href="#">Company 360</a>
        <div class="navbar-nav">
          <ul class="navbar-nav links">
            <li class="nav-item">
              <router-link class="nav-link" to="#section_1"
                >Section 1</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                :to="{ path: '/', hash: '#section_2' }"
                >Section 2</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                :to="{ path: '/', hash: '#section_3' }"
                >Section 3</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login">Access</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container mt-5">
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="emphasis">
            <h4 class="text-primary text-center">
              Discover the advantages of using Company 360 to manage your
              business!
            </h4>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <p class="text-center">Sign up and watch our demo</p>
          <div class="card">
            <div class="card-body">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Name" />
              </div>
              <div class="mb-3">
                <input type="email" class="form-control" placeholder="E-mail" />
              </div>
              <button class="btn btn-primary">Sign up</button>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-5 p-5 bg-light">
        <div class="col">
          <h3 id="section_1">Section 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            posuere luctus elit, et blandit neque pulvinar a. Nunc id
            consectetur ipsum. Sed dignissim turpis quis fringilla pretium. Sed
            bibendum faucibus ex, tincidunt aliquet mauris commodo accumsan.
            Vivamus commodo risus quis euismod tempus. Donec non hendrerit quam.
            Vivamus laoreet lacus sed neque tristique pulvinar. Vestibulum in
            maximus dolor. Mauris efficitur libero quis placerat placerat.
          </p>
          <p>
            Proin sollicitudin orci ligula, ac bibendum ante porttitor ac.
            Mauris a sem id augue blandit dapibus. Fusce facilisis mi et velit
            porttitor suscipit. Praesent ut nunc ullamcorper, pretium augue
            vitae, bibendum ligula. Duis ut augue lobortis, congue erat et,
            placerat nisl. Nam sed lobortis leo. Pellentesque gravida hendrerit
            urna, vitae ullamcorper ante pharetra eget. Integer consectetur
            laoreet ultricies. Nunc vestibulum pulvinar sodales.
          </p>
        </div>
      </div>

      <div class="row mt-5 p-5">
        <div class="col">
          <h3 id="section_2">Section 2</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            posuere luctus elit, et blandit neque pulvinar a. Nunc id
            consectetur ipsum. Sed dignissim turpis quis fringilla pretium. Sed
            bibendum faucibus ex, tincidunt aliquet mauris commodo accumsan.
            Vivamus commodo risus quis euismod tempus. Donec non hendrerit quam.
            Vivamus laoreet lacus sed neque tristique pulvinar. Vestibulum in
            maximus dolor. Mauris efficitur libero quis placerat placerat.
          </p>
        </div>
      </div>

      <div class="row mt-5 p-5 bg-light">
        <div class="col">
          <h3 id="section_3">Section 3</h3>
          <p>
            Proin sollicitudin orci ligula, ac bibendum ante porttitor ac.
            Mauris a sem id augue blandit dapibus. Fusce facilisis mi et velit
            porttitor suscipit. Praesent ut nunc ullamcorper, pretium augue
            vitae, bibendum ligula. Duis ut augue lobortis, congue erat et,
            placerat nisl. Nam sed lobortis leo. Pellentesque gravida hendrerit
            urna, vitae ullamcorper ante pharetra eget. Integer consectetur
            laoreet ultricies. Nunc vestibulum pulvinar sodales.
          </p>
        </div>
      </div>
    </div>

    <div class="container-fluid mt-5">
      <div class="row bg-secondary">
        <div class="col">
          <p>Footer</p>
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

.links {
  flex-direction: row;
}
.links a {
  margin-right: 20px;
}
</style>
