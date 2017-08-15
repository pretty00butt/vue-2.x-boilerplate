<template>
  <nav class="navbar container">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">Vue 2.x Boilerplate</router-link>
    </div>

     <div class="navbar-end">
      <a class="navbar-item is-hidden-desktop-only" href="https://github.com/the6thm0nth/vue-2.x-boilerplate" target="_blank">
        <span class="icon" style="color: #333;">
          <i class="fa fa-github"></i>
        </span>
      </a>

      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <router-link class="button is-primary" to="/store">
              <span>Store</span>
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'top-nav'
}
</script>
