<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">
        <NuxtLink to="/">
          Firengi
        </NuxtLink>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">
            <NuxtLink to="/">
              Home
            </NuxtLink>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search" />
            <b-button size="sm" class="my-2 my-sm-0" type="submit">
              Search
            </b-button>
          </b-nav-form>

          <b-nav-item href="#">
            <NuxtLink to="/products">
              Products
            </NuxtLink>
          </b-nav-item>

          <b-nav-item href="#">
            <NuxtLink to="/my-items">
              My Items
            </NuxtLink>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.form-inline {
  margin-right: 50px;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
