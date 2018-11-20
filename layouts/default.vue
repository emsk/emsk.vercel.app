<template>
  <section class="container">
    <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <span class="navbar-item">Masaki Enjo</span>
        <a role="button" id="navbar-burger" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbar-menu" class="navbar-menu">
        <div class="navbar-start">
          <nuxt-link to="/" class="navbar-item is-tab">Home</nuxt-link>
          <nuxt-link to="/code" class="navbar-item is-tab">Code</nuxt-link>
          <nuxt-link to="/apps" class="navbar-item is-tab">Apps</nuxt-link>
          <nuxt-link to="/posts" class="navbar-item is-tab">Posts</nuxt-link>
        </div>
      </div>
    </nav>

    <section>
      <nuxt></nuxt>
    </section>
  </section>
</template>

<script>
export default {
  mounted() {
    document.addEventListener('DOMContentLoaded', () => {
      const navbarBurger = document.getElementById('navbar-burger');
      navbarBurger.addEventListener('click', () => {
        navbarBurger.classList.toggle('is-active');
        document.getElementById('navbar-menu').classList.toggle('is-active');
      });

      const navbarBurgerItems = document.querySelectorAll('.navbar-item');
      navbarBurgerItems.forEach(element => {
        element.addEventListener('click', () => {
          navbarBurger.classList.remove('is-active');
          document.getElementById('navbar-menu').classList.remove('is-active');
        });
      });
    });
  }
};
</script>

<style>
nav {
  font-size: 0.75rem;
  letter-spacing: 1px;
}

.navbar-item {
  line-height: 3.25rem;
  padding: 0 .75rem;
}

.navbar-item.is-tab {
  padding-bottom: 0;
}

.navbar-item.is-tab.nuxt-link-exact-active {
  border-bottom: 1px solid #3273dc;
  color: #3273dc;
}
</style>
