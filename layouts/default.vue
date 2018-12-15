<template>
  <section class="container">
    <nav class="navbar is-fixed-top container has-shadow item-body" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <span class="navbar-item">Masaki Enjo</span>
        <a role="button" id="navbar-burger" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu" @click="toggleNavbar" :class="{ 'is-active': isActive }">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbar-menu" class="navbar-menu" @click="closeNavbar" :class="{ 'is-active': isActive }">
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
  head: {
    bodyAttrs: {
      class: 'has-navbar-fixed-top'
    }
  },
  data () {
    return { isActive: false };
  },
  methods: {
    toggleNavbar () {
      this.isActive = !this.isActive;
    },
    closeNavbar () {
      this.isActive = false;
    }
  }
};
</script>

<style>
body {
  word-wrap: break-word;
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

@media screen and (max-width: 1087px) {
  .navbar-item.is-tab.nuxt-link-exact-active,
  .navbar-item.is-tab:hover {
    border-bottom-color: transparent;
  }
}
</style>
